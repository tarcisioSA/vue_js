<template>
    <div id="content">
        <img :src="foto" alt="">
    </div>
</template>
<script>
    export default{
        name: 'fotoEsquerda',
        data() {
            return {
                foto: require('@/assets/logo.png')
            }
        },
    };

</script>

<style scoped>
#content{
    margin-top: 300px;
    justify-content: center;
    display: flex;
    max-width: 25%;
    max-height: 400px;
}
</style>