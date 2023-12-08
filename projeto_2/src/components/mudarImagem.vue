<template>
    <div><button @click="$emit('mudarImagem')">Trocar imagem</button></div>
</template>
<script>
export default{
    name: 'mudarImagem',
    emits: ['mudarImagem']
}
</script>