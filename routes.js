import createAPI from "./create-api.js"
import entities from "./entities.js"

// Criar todas as rotas e cruds para as entidades
function addRoutes(app) {
    for(let key in entities) {
        createAPI(app, entities[key] )
    }
}

export default addRoutes