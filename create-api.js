import sgbd from './sgbd.js'
import auth from "./auth.js"

function createAPI(app, objEntity) {

    let entity = objEntity.name
    let route = objEntity.route

    console.log(`🔥 API para entidade [${entity}] criada...`);

    function checkEntityModel(body) {
        for(let idx in objEntity.fields) {
            let field = objEntity.fields[idx]
            if(body[field.name] == undefined) {
                return { msg: `Error: missing field [${field.name}] in entity structure...`}
            }
        }
        let keys = Object.keys(body)
        for(let idx in keys) {
            let fieldExists = false
            for(let idx2 in objEntity.fields) {
                let field = objEntity.fields[idx2]
                if(keys[idx] == field.name) {
                    fieldExists = true
                }
            }
            if(!fieldExists) {
                return { msg: `Error: invalid field [${keys[idx]}] in entity structure...`}
            }
        }
        return false
    }   

    app.get(route, function (req, res) {
        console.log('alguém fez requisição GET '+route);
        res.json(sgbd.db[entity])
    })

    app.get(route+"/:id", function (req, res) {
        console.log('alguém fez requisição GET '+route+"/:id",req.params);
        res.json(sgbd.db[entity][req.params.id])
    })

    app.post(route, auth.middlewareAuth, function (req, res) {
        console.log('alguém fez requisição POST '+route);
        console.log('conteúdo do body:', req.body);
        let err = checkEntityModel(req.body)
        if(err) {
            res.status(400).json(err)
        } else {
            sgbd.db[entity][req.body.id] = req.body
            sgbd.write()
            res.json({ msg: "ok", data: sgbd.db[entity][req.params.id] })
        }
    })

    app.put(route, function (req, res) {
        res.json({ msg: "Error: must call route "+route+"/[ID]" })
    })

    app.put(route+"/:id", auth.middlewareAuth, function (req, res) {
        console.log('alguém fez requisição PUT '+route+"/:id",req.params);
        console.log('conteúdo do body:', req.body);
        let err = checkEntityModel(req.body)
        if(err) {
            res.status(400).json(err)
        } else {
            sgbd.db[entity][req.params.id] = req.body
            sgbd.write()
            res.json(sgbd.db[entity][req.params.id])    
        }
    })

    app.delete(route+"/:id", function (req, res) {
        console.log('alguém fez requisição PUT '+route+"/:id",req.params);
        delete sgbd.db[entity][req.params.id]
        sgbd.write()
        res.json({})
    })

}

export default createAPI 