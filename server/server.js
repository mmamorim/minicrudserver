import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import sgbd from './sgbd.js'
import addRoutes from "./routes.js"
import auth from "./auth.js"

const PORT = process.env.PORT
console.log("PORT",PORT);
if(!PORT) {
    console.log("Variáveis de ambiente não definidas...Você criou o arquivo .env?");
    process.exit()
}

sgbd.init()

const app = express()
app.use(bodyParser.json())       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}))
app.use(cors())

app.get('/', (req, res) => {
    res.send('🚒 Hello World CRUD')
})

auth.authRote(app)

async function middlewareTeste(req, res, next) {
    console.log('Eu sou um middleware!!!!!')
    if(parseInt(Math.random()*2) == 0) {
        next()
    } else {
        res.send('PROBLEMA!')
    }
}

app.get('/teste', middlewareTeste, (req, res) => {
    res.send('🔥🔥🔥 ROTA /teste acessada!')
})


addRoutes(app)

app.listen(PORT, () => {
    console.log('🔥 estou escutando na porta '+PORT);
})