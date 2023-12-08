<template>
    <div><img :src="avatar" :alt="descricao">
       <mudar-imagem @mudar-imagem="trocarImagem"/>
    </div>
</template>
<script>
import MudarImagem from './mudarImagem.vue'

    export default{
  components: {MudarImagem },
        name: 'Picture',
        data(){
            return{
                avatar: "/img/avatar.png",
                
                descricao: 'Tarcisio Sousa'
            }
        },
        methods:{
            trocarImagem(){
                this.avatar = '/img/avatar2.png'
            }
        }
    }
</script>