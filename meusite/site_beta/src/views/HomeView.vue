<template>
  <div id="titulo">
    <h1>ALEXANDRE FOTOGRAFIA</h1>
  </div>
  <FotoEsquerda/>
</template>

<script>
import FotoEsquerda from '@/components/fotoEsquerda.vue';



// @ is an alias to /src


export default {
    name: 'HomeView',
    components: { FotoEsquerda }
}
</script>

<style scoped>
#titulo{
  display: flex;
  margin-top: 30px;
  justify-content: center;
}

</style>