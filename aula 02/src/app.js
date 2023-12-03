const MyNameApp = {
    data(){
        return{
            name: 'Vittor',
            idade: 30,
            pais: 'Brasil',
            estado: 'Goías'
        }
    }
}

Vue.createApp(MyNameApp).mount('#app')