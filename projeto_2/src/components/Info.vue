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
        <p v-show="mostrar_email">Mande uma mensagem para {{ email }}</p>
        <p>Para acessar meu portifolio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
    </div>
</template>
<script>
export default {
    name: 'Info',
    data() {
        return {
            esta_trabalhando: false,
            mostrar_email: true,
            email: 'tcisio10@gmail.com',
            meu_link: 'https://www.google.com'
        }
    }

}
</script>