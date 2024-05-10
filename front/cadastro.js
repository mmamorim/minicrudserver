
const cadastro = {
    components: {},
    template: `
    <div class="modal" id="cadastro" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Adicionar Filme
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="mb-3">
                        <label class="form-label">ID</label>
                        <input type="text" class="form-control" placeholder="Digite um ID" v-model="formData.id">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Nome</label>
                        <input type="text" class="form-control" placeholder="Digite nome do filme" v-model="formData.nome">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Ano</label>
                        <input type="text" class="form-control" placeholder="Digite ano do filme" v-model="formData.ano">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Genero</label>
                        <select class="form-select" v-model="formData.genero">
                            <option value="romance">Romance</option>
                            <option value="aventura">Aventura</option>
                            <option value="ação">Ação</option>
                          </select>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Cancelar
                    </button>
                    <button type="button" class="btn btn-primary" @click="adicionarFilme">
                        Adicionar Filme
                    </button>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            modal: null,
            isEdit: false,
            formData: {
                id: "",
                nome: "",
                genero: "",
                ano: ""
            }
        }
    },
    mounted() {
        this.modal = new bootstrap.Modal(document.getElementById('cadastro'), {})
    },
    methods: {

        async show(id) {
            console.log(id);
            let url = "http://localhost:3000/filmes/" + id
            let resp = await fetch(url)
            let obj = await resp.json()
            console.log("chegou",obj);
            this.formData = obj
            this.isEdit = true
            this.modal.show()
        },

        async adicionarFilme() {
            console.log("adicionarFilme", this.formData);
            let formBody = [];
            for (let property in this.formData) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(this.formData[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            console.log("formBody", formBody);

            if(this.isEdit) {
                let url = "http://localhost:3000/filmes/" + this.formData.id
                let resp = await fetch(url, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body: formBody
                })
                console.log("resp", resp);    
                this.isEdit = false
            } else {
                let url = "http://localhost:3000/filmes"
                let resp = await fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body: formBody
                })
                console.log("resp", resp);    
            }
        }
    }
}

export default cadastro