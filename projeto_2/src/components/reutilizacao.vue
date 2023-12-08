<template>
    <div><button @click="ativar($event)">Clique aqui!</button>
    <span v-show="ativou">Ativado!</span>
    </div>
</template>
<script>
export default{
    name: 'reutilizacao',
    data(){
        return{
            ativou: false
        }
    },
    methods: {
        ativar(){
            this.ativou = !this.ativou
        }
    }
}
</script>