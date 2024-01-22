<template>
    <div>
        <p>
            componente de mensagem
        </p>
        <div>
            <form id="burger-form">
                <div class="input-container">
                    <label for="nome">Nome do cliente:</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
                </div>

                <div class="input-container">
                    <label for="pao">Escolha seu pão:</label>
                    <select name="pao" id="pao" v-model="pao">
                        <option value="">Selecione seu pão</option>
                        <option value="integral">Integral</option>
                    </select>
                    
                    
                </div>

            </form>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'BurgerForm'
    }
</script>

<style scoped>

</style>