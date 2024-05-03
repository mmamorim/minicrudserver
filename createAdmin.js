import { SimpleCrypto } from "simple-crypto-js"
import 'dotenv/config'
import sgbd from './sgbd.js'

const SECRET = process.env.SECRET
if (!SECRET) {
    console.log("SECRET not found...Você criou o arquivo .env?");
    process.exit()
}
//console.log("SECRET", SECRET);
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
if (!ADMIN_PASSWORD) {
    console.log("ADMIN_PASSWORD not found...Você criou o arquivo .env?");
    process.exit()
}
//console.log("ADMIN_PASSWORD", ADMIN_PASSWORD);

const simpleCrypto = new SimpleCrypto(SECRET)
let pass_crypted = simpleCrypto.encrypt(ADMIN_PASSWORD)
console.log("pass_crypted", pass_crypted);

//let original = simpleCrypto.decrypt(pass_crypted)
//console.log("original: ", original);

sgbd.init()

sgbd.db["users"] = {}
sgbd.db["users"]["admin"] = {
    "id": "admin",
    "nome": "Administrador",
    "username": "admin",
    "password": pass_crypted
}
sgbd.write()
console.log("🔥 User Admin created!")