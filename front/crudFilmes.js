import topo from "./topo.js"
import barraSuperior from "./barraSuperior.js"
import tabela from "./tabela.js"
import cadastro from "./cadastro.js"

const crudFilmes = {
    components: { topo, barraSuperior, tabela, cadastro },
    template: `
        <section>
            <topo />
            <barraSuperior />
            <tabela @editarFilme="editarFilme"/>
            <cadastro ref="cadastroRef"/>
        </section>
    `,
    data() {
        return {
        }
    },
    methods: {

        editarFilme(id) {
            console.log("chamou editar filme",id);
            this.$refs.cadastroRef.show(id)
        }
    }
}

export default crudFilmes