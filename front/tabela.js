import filme from "./filme.js"

const tabela = {
    components: { filme },
    template: `
        <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Ano</th>
                <th>Genero</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <filme v-for="(elem,index) in filmes" :id="elem.id" :nome="elem.nome" :ano="elem.ano" :genero="elem.genero" @eventoExcluir="excluirFilme" @editarFilme="editarFilme"/>
        </tbody>
        </table>
    `,
    data() {
        return {
            filmes: {}
        }
    },
    mounted() {
        console.log("passei aqui montou componente tabela");
        this.loadFilmes()
    },
    methods: {

        async loadFilmes() {
            let url = "http://localhost:3000/filmes"
            let resp = await fetch(url)
            let obj = await resp.json()
            console.log("chegou",obj);
            this.filmes = obj
        },

        async excluirFilme(id) {
            console.log("excluirFilme", id);
            let url = "http://localhost:3000/filmes/" + id
            let resp = await fetch(url, {
                method: "DELETE"
            })
        },

        editarFilme(id) {
            console.log("id",id);
            this.$emit('editarFilme',id)
        }
    }
}

export default tabela