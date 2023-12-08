<template>
    
        <div>
            <h1>Tarcisio</h1>
            <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
            <multiplosEventos/>
            <reutilizacao/>
            <reutilizacao/>
            <reutilizacao/>
            <reutilizacao/>
            <reutilizacao/>
            <reutilizacao/>
        </div>
        
   
</template>

<script>

import multiplosEventos from './multiplosEventos.vue';
import Reutilizacao from './reutilizacao.vue';


    export default {
        name: 'PrimeiroCompoente',
        components: {
            multiplosEventos,
                Reutilizacao
        },
        data() {
            return {
                nome: 'Tarcisio',
                profissao: 'Promotor'
                
            }
        }
    }
</script>