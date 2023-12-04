<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando</p>
        <p>Utilizo as seguintes tecnologias: </p>
        <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Css</li>
        </ul>
        <div>
            <button @click="showEmail">{{textoBotao}}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para {{ email }}</p>
        <p>Para acessar meu portifolio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
        <div v-show="foto">
            <Picture/>
        </div>
        <button @click="ocultarFoto">{{ botatoFoto }}</button>
    </div>
</template>
<script>
import Picture from './Picture.vue';


export default {
    name: 'Info',
    components: {
    Picture,
    
},
    data() {
        return {

            foto: true,
            esta_trabalhando: false,
            mostrar_email: false,
            email: 'tcisio10@gmail.com',
            meu_link: 'https://www.google.com',
            textoBotao: 'Mostrar e-mail',
            botatoFoto: 'Ocultar foto'
        }
    },
    methods: {
        showEmail(){
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email){
                this.textoBotao = 'Mostrar e-mail'
            }else{
                this.textoBotao = 'Ocultar e-mail'
            }
        },
        ocultarFoto(){
            this.foto = !this.foto
            if(this.foto){
                this.botatoFoto = 'Ocultar foto'
            }else{
                this.botatoFoto = 'Mostrar foto'
            }
        }

      
    }

}
</script>