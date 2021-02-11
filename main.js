const app = {
    data() {
        return {
            tasks: [

            {src:'./images/001.png', 
            detail: 'Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.', 
            show: false, 
            like: false},

            {src:'./images/004.png', 
            detail: 'Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I.', 
            show: false, 
            like: false},

            {src:'./images/007.png', 
            detail: 'Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I.', 
            show: false, 
            like: false}
                    ]

        }
    },
    methods: {
        toggleShow(index){
            this.tasks[index].show = !this.tasks[index].show
        },
        toggleLike(index){
            this.tasks[index].like = !this.tasks[index].like
        }
    },
    computed: {
        countLike(){
            return this.tasks.filter( t => t.like ).length
        }
    }
}
Vue.createApp(app).mount('#app')