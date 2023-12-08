<template>
    <div><img :src="avatar" :alt="descricao">
        <reutilizacao/>
    </div>
</template>
<script>
import reutilizacao from './reutilizacao.vue'
    export default{
  components: { reutilizacao },
        name: 'Picture',
        data(){
            return{
                avatar: "/img/avatar.png",
                descricao: 'Tarcisio Sousa'
            }
        }
    }
</script>