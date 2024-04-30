import jwt from "jsonwebtoken"

const noauth = {
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
            if (username == auth.username && password == auth.password) {
                let token = auth.getToken(username)
                res.json({ msg: 'ok', token })
            } else {
                res.json('usuário / senha inválidos!')
            }
        })
    },

    async middlewareAuth(req, res, next) {
        console.log("chamei middleware NO AUTH");
        next()
    }
}

export default noauth