<template>
  <div>
    <Header />
    <PrimeiroComponente />
    <life-cycle/>
    <pessoa/>
  </div>
    </template>

<script>
    
    import Header from './components/Header.vue';
    import PrimeiroComponente from './components/PrimeiroComponente.vue';
    import LifeCycle from './components/LifeCycle.vue';
    import Pessoa from './components/Pessoa.vue';


  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa,
      Header

    }

  }

</script>

<style>
  body{
    background-color: #333;
    color: #fff;
  }

  a{
    color: red;
  }
  .teste{
    background-color: #000000;
    max-width: 500px;
    margin: auto;
  }
</style>