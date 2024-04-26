# Mini Servidor CRUD 🌐 🖥️

Exemplo simples de servidor que cria uma API persistente para entidades.  

## Como rodar?

Clone ou faça o download deste repositório. Acesse a pasta, instale as dependências e execute o via nodemon o javascript `server.js`  

```bash
git clone https://github.com/mmamorim/minicrudserver.git
cd minicrudserver
npm install
node server.js
```

## Onde os dados ficam armazenados?

Os dados ficam armazenados localmente no formato JSON no arquivo [db_data.json](db_data.json) na pasta raiz do servidor.

## Como criar uma nova Entidade e API CRUD?

#### Exemplo para criar uma entidade `filmes` 

🧑‍💻 Adicione ao arquivo de banco de dados JSON `db_data.json` uma chave filmes e se preferir, já adicione um filme com estrutura desejada (exemplo de um filme):

~~~javascript 
"filmes": {
    "filme01": {
        "id": "filme01",
        "nome": "O vento levou",
        "ano": 1960,
        "genero": "romance" 
    }
}
~~~

🧑‍💻 No arquivo `entities.js` (exemplo neste repositório), adicionar a estrutura de um objeto que modela a Entidade desejada indicando a rota e nome da entidade:

~~~javascript 
filmes: {
    route: "/filmes",
    name: "filmes",
    fields: [
        { name: "id", type: "int", pk: true },
        { name: "nome", type: "string", pk: false },
        { name: "ano", type: "int", pk: false },
        { name: "genero", type: "string", pk: false }
    ]
}
~~~

O servidor irá disponibilizar as seguintes rotas (paths), métodos e parâmetros:

> **GET 	/filmes**
> Devolve JSON contendo todos os filmes

> **POST 	/filmes**
> Insere filme. Os dados devem ser enviados no *body* da requisição HTTP. 
> **Deve necessariamente** conter um campo **id** como atributo. { "id": "XXXX", ... }

> **PUT 	/filmes/{id}**
> Altera filme com respectivo **id**. Os dados devem ser enviados no *body* da requisição HTTP.

> **DELETE /filmes/{id}**
> Remove filme com respectivo **id**. 


