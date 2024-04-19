import jwt from "jsonwebtoken"

const auth = {
    userlogin: 'admin',
    password: '12345',
    secret: 'meu segredo super secreto',

    getToken(username) {
        let token = jwt.sign({ user: username }, auth.secret, { expiresIn: 30 })
        return token
    },

    authRote(app) {
        app.post('/auth', function (req, res) {
            console.log('conteúdo do body:', req.body);
            let { username, password } = req.body
            if(username == auth.userlogin && password == auth.password) {
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
        }
        let parts = headerText.split(" ")
        let token = parts[1]
        console.log("token",token);
        jwt.verify(token, auth.secret, (err, tokenDecoded) => {
            if(err) {
                res.status(400).json({ msg: 'token not valid.' })
            } else {
                //console.log("tokenDecoded",tokenDecoded);
            }
        })
        res.json({ msg: 'teste' })
    }
}

export default auth