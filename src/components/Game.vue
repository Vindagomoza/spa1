<template>
    <div>
        <div class="game" v-for="item in getAllGames" :key="item.id">
        <p class="game-name">
            {{ item.title}}
        </p>
        <div class="game-content">
            <img
                    class="game-image"
                    v-bind:src="'https://picsum.photos/id/' + item.id + '/200/200'"
                    alt="Game logo missing"
            >
            <div class="game-buttons">
                <button v-if="item.hasDemo">DEMO</button>
                <vs-button :class="isFavorite(item)"
                           @click="addToFavorites(item)"
                           color="danger" type="gradient" style="min-width: 120px">{{ favorite ? 'Unfavorite' : 'favorite' }}</vs-button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "GameList",
        methods: {
            ...mapActions(['fetchGames']),
            addToFavorites(game) {
                if (this.getFavorites.includes(game.id)){
                    return this.$store.commit('DELETE_GAME', game);
                }
                else{
                    this.$store.commit('updateFavoriteGames', game);
                }
            },
            fav(){
                this.button.set.text('unfavorite')
            },
            isFavorite(game) {
                if (this.getFavorites.includes(game.id)) {
                    this.favorite = true;
                    return 'favorite-game'
                }
                this.favorite = false;
                return '';
            }
        },
        computed: {
            ...mapGetters(['getAllGames', 'getFavorites','favoritesCount'])
        },
        data: () => ({}),
        async mounted() {
            await this.fetchGames();
        }
    };
</script>