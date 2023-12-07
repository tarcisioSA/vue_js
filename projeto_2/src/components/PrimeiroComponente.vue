<template>
    
        <div>
            <h1>Tarcisio</h1>
            <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
            <multiplosEventos/>
        </div>
        
   
</template>

<script>

import multiplosEventos from './multiplosEventos.vue';

    export default {
        name: 'PrimeiroCompoente',
        components: {
            multiplosEventos
        },
        data() {
            return {
                nome: 'Tarcisio',
                profissao: 'Promotor'
                
            }
        }
    }
</script>