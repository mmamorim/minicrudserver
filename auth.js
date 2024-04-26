import jwt from "jsonwebtoken"

const auth = {
    username: 'admin',
    password: '12345',
    secret: 'meu segredo super secreto',

    getToken(username) {
        let token = jwt.sign({ user: username }, auth.secret, { expiresIn: 120 })
        return token
    },

    authRote(app) {
        app.post('/auth', function (req, res) {
            console.log('conteúdo do body:', req.body);
            let { username, password } = req.body
            if(username == auth.username && password == auth.password) {
                let token = auth.getToken(username)
                res.json({ msg: 'ok', token })
            } else {
                res.json('usuário / senha inválidos!')
            }
        })
    },

    async middlewareAuth(req, res, next) {
        console.log("chamei middleware");
        let headerText = req.headers.authorization
        console.log("headerText",headerText);
        if(headerText == undefined) {
            res.status(400).json({ msg: 'token not found.' })
        } else {
            let parts = headerText.split(" ")
            let token = parts[1]
            console.log("token",token);
            jwt.verify(token, auth.secret, (err, tokenDecoded) => {
                if(err) {
                    res.status(400).json({ msg: 'token not valid. '+err })
                } else {
                    //console.log("tokenDecoded",tokenDecoded);
                    next()    
                }
            })
        }
    }
}

export default auth