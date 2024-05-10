
const entities = {
    users: {
        route: "/users",
        name: "users",
        fields: [
            { name: "id", type: "int", pk: true },
            { name: "nome", type: "string", pk: false },
            { username: "nome", type: "string", pk: false },
            { password: "emoji", type: "string", pk: false, crypt: true }
        ]
    },    
    frutas: {
        route: "/frutas",
        name: "frutas",
        fields: [
            { name: "id", type: "int", pk: true },
            { name: "nome", type: "string", pk: false },
            { name: "emoji", type: "string", pk: false }
        ]
    },
    filmes: {
        route: "/filmes",
        name: "filmes",
        fields: [
            { name: "id", type: "int", pk: true },
            { name: "nome", type: "string", pk: false },
            { name: "ano", type: "int", pk: false },
            { name: "genero", type: "string", pk: false }
        ]
    },
    musicas: {
        route: "/musicas",
        name: "musicas",
        fields: [
            { name: "id", type: "int", pk: true },
            { name: "nome", type: "string", pk: false },
            { name: "ano", type: "int", pk: false },
            { name: "genero", type: "string", pk: false }
        ]
    }
}

export default entities