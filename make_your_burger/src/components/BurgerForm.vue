<template>
    <div>
       <Message :msg="msg" v-show="msg"/>
        <div>
            <form id="burger-form" @submit="createBurger">
                <div class="input-container">
                    <label for="nome">Nome do cliente:</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
                </div>
                <div class="input-container">
                    <label for="pao">Escolha seu pão:</label>
                    <select name="pao" id="pao" v-model="pao">
                        <option value="">Selecione seu pão</option>
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
                            {{ pao.tipo }}
                        </option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="carne">Escolha a carne:</label>
                    <select name="carne" id="carne" v-model="carne">
                        <option value="">Selecione sua carne</option>
                        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
                            {{carne.tipo}}
                        </option>
                    </select>
                </div>
                <div id="opcionais-container" class="input-container">
                    <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
                    <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
                        <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                        <span>{{ opcional.tipo }}</span>
                    </div>
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="criar meu Burger">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import Message from './Message.vue';

    export default{
    name: 'BurgerForm',
    data() {
        return {
            paes: null,
            carnes: null,
            opcionaisdata: null,
            nome: null, //daqui para baixo são os que ser]ao enviados para o servidor
            pao: null,
            carne: null,
            opcionais: [],
            status: 'Solicitado',
            msg: null
        };
    },
    methods: {
        async getIngredientes() {
            const req = await fetch("http://localhost:3000/ingredientes");
            const data = await req.json();
            //obtendo os dados do servidor, para depois inserir eles no formulario acima via v-for
            this.paes = data.paes;
            this.carnes = data.carnes;
            this.opcionaisdata = data.opcionais;
            console.log(data);
        },
        async createBurger(e) {
            e.preventDefault();
            //obtendo a escolha do user para mandar para o dashboard
            const data = {
                nome: this.nome,
                carne: this.carne,
                pao: this.pao,
                opcionais: Array.from(this.opcionais),
                status: "Solicitado"
            };
            const dataJson = JSON.stringify(data);
            //meio utilizado para obter os dados que o user inseriu
            const req = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: { "content-Type": "aplication/json" },
                body: dataJson
            });
            const res = await req.json();
            // mensagem do sistema

            this.msg = `Parabéns ${this.nome}, Pedido de Nº${res.id} Realizado com sucesso`

            //limpar mensagem

            setTimeout(() => this.msg = '', 5000)

            // limpar os campos
            this.nome = '',
                this.carne = '',
                this.pao = '',
                this.opcionais = '';
        }
    },
    mounted() {
        this.getIngredientes();
    },
    components: { Message }
}
</script>

<style scoped>
    #burger-form {
        max-width: 400px;
        margin: 0 auto;
    }

    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #fcba03;
    }

    input, select{
        padding: 5px 10px;
        width: 300px;
    }

    #opcionais-container{
        flex-direction: row;
        flex-wrap: wrap;
    }

    #opcionais-title{
        width: 100%;
    }

    .checkbox-container{
        display:flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }

    .checkbox-container span,
    .checkbox-container input{
        width: auto;
    }

    .checkbox-container span{
        margin-left: 6px;
        font-weight: bold;
    }

    .submit-btn{
        background-color: #222;
        color: #fcba03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;

    }

    .submit-btn:hover{
        background-color: transparent;
        color: #222;
    }


</style>