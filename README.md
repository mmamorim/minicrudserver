# Mini Servidor CRUD 🌐 🖥️

Exemplo simples de servidor que cria uma API persistente para entidades.  

## Como rodar?

Clone ou faça o download deste repositório. Acesse a pasta, instale as dependências e execute o via nodemon o javascript `server.js`  

```bash
git clone https://github.com/mmamorim/minicrudserver.git
cd minicrudserver
npm install
nodemon servers.js
```

## Como criar uma nova Entidade e API CRUD?

#### Exemplo para criar uma entidade `filmes` 

Adicione ao arquivo de banco de dados JSON uma chave filmes e se preferir, já adicione um filme com estrutura desejada (exemplo de um filme):

~~~javascript 
"filmes": {
    "filme-01": {
        "id": "filme-01",
        "nome": "O vento levou",
        "ano": 1960,
        "genero": "romance" 
    }
}
~~~

🧑‍💻 Dado o arquivo `routes.js` (exemplo neste repositório), adicionar as linhas:

~~~javascript 
createAPI(app, "/filmes", "filmes" )
~~~

o arquivo `routes.js` após modificações:

#### Arquivo: ```routes.js``` 

~~~javascript 
import createAPI from "./controllers/create-api.js"

// Criar todas as rotas e cruds para as entidades
function addRoutes(app) {
    createAPI(app, "/frutas", "frutas" )
    createAPI(app, "/filmes", "filmes" )
}

export default addRoutes
~~~

