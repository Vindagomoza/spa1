<template>
    <div>
        <div class="game" v-for="item in getAllGames" :key="item[1]">
            <Game v-bind:game="item" @add-to-favorites="addToFavorites"/>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Game from "./Game";
    export default {
        name: "GameList",
        components:{Game},
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
