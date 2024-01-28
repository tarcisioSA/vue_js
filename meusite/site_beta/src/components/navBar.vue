<template>
    <nav class="navbar">
        
            <router-link to="/">Home</router-link>
            <router-link to="/fotos">Fotos</router-link>
        
    </nav>
</template>
<script>
    export default{
        name: 'navBar'
    }
</script>

<style scoped>
    .navbar{
        background-color: #645f5f;
        border-color: 4px solid #000000;
        padding: 15px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .navbar a{
        margin: 12px;
        text-decoration: none;
        color: white;
        font-weight: bold;
        transition: .5s;
    }

    .navbar a:hover{
        color: #000000;
        
    }
  
</style>