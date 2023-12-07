<template>
    <div>
        <button @click="primeiro($event), segundo($event)">Ativar multiplos</button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>
<script>
export default{
    name: 'multiplosEventos',
    data(){
        return{
            multiplos_eventos: ''
        }
    },
    methods: {
        primeiro(e){
            e.preventDefault()

            this.multiplos_eventos = 'Primeiro Evento'
        },

        segundo(e){
            setTimeout(() => this.multiplos_eventos = 'Segundo evento!', 500)
        }
    }
}
</script>

<style scoped>
div{
    margin: 100px;
}
</style>