import createAPI from "./create-api.js"

// Criar todas as rotas e cruds para as entidades
function addRoutes(app) {
    createAPI(app, "/frutas", "frutas" )
    createAPI(app, "/filmes", "filmes" )
}

export default addRoutes