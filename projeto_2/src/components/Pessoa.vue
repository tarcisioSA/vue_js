<template>
    <div>
        <h2>Está é a descroção da pesspa {{ nome }}</h2>
        <Info />
        <Form />
    </div>
</template>

<script>
import Info from './Info';
import Form from './Form.vue';

export default {
  components: {
    Info
  },
    name: 'Pessoa',
    components: {
        Info,
        Form
    },
    data() {
        return {
            nome: 'Tarcisio'

        }
    }
}
</script>