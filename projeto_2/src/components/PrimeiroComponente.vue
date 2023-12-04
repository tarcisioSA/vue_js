<template>
    
        <div>
            <h1>Tarcisio</h1>
            <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
        </div>
   
</template>

<script>
    export default {
        name: 'PrimeiroCompoente',
        data() {
            return {
                nome: 'Tarcisio',
                profissao: 'Promotor'
                
            }
        }
    }
</script>