
const barraSuperior = {
    components: {},
    template: `
    <div class="flex items-center justify-between">
        <div class="text-lg">
            Lista de filmes
        </div>
        <div>
            <button class="btn btn-primary" @click="showModal">
                Novo filme
            </button>
        </div>
    </div>
    `,
    data() {
        return {

        }
    },
    methods: {

        showModal() {
            let modal = new bootstrap.Modal(document.getElementById('cadastro'), {})
            modal.show()
        }
    }
}

export default barraSuperior