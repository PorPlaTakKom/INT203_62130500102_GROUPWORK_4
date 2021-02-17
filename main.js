const app = {
    data() {
        return {
            tasks: [

            {src:'./images/001.png', 
            detail: 'Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.',
            name: 'Bulbasaur', 
            show: false, 
            like: false},

            {src:'./images/004.png', 
            detail: 'Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I.', 
            name: 'Charmander', 
            show: false, 
            like: false},

            {src:'./images/007.png', 
            detail: 'Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I.', 
            name: 'Squirtle', 
            show: false, 
            like: false}
                    ],
            searchText : '',
            search: false

        }
    },
    methods: {
        toggleShow(index){
            this.filterText[index].show = !this.filterText[index].show
        },
        toggleLike(index){
            // this.tasks[index].like = !this.tasks[index].like
            this.filterText[index].like = !this.filterText[index].like
        },
        toggleSearch(){
            this.search = !this.search
        }
    },
    computed: {
        countLike(){
            return this.tasks.filter( t => t.like ).length
        },
        filterText(){
            return this.tasks.filter( d => {
                return d.name.toLowerCase().includes(this.searchText.toLowerCase())
            })
        }
    }
}
Vue.createApp(app).mount('#app')