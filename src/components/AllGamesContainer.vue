<template>
  <div>
    <h2>Games page</h2>
    <div class="container">
      <GameList :getAllGames="getAllGames"/>
<!--      <div class="game" v-for="item in getAllGames" :key="item.id">-->
<!--        <p class="game-name">-->
<!--          {{ item.title}}-->
<!--        </p>-->
<!--        <div class="game-content">-->
<!--          <img-->
<!--              class="game-image"-->
<!--              v-bind:src="'https://picsum.photos/id/' + item.id + '/200/200'"-->
<!--              alt="Game logo missing"-->
<!--          >-->
<!--          <div class="game-buttons">-->
<!--            <button v-if="item.hasDemo">DEMO</button>-->
<!--            <button-->
<!--                :class="isFavorite(item)"-->
<!--                @click="addToFavorites(item)"-->
<!--            >{{ favorite ? 'Unfavorite' : 'favorite' }}</button>-->
<!--            <vs-button color="danger" type="gradient" icon="favorite" style="min-width: 120px"></vs-button>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    <router-link class="link" to="/">All Games</router-link>
    <router-link class="link" to="/favorites">Favorites({{favoritesCount}})</router-link>
    </div>
</template>

<script>


import {mapActions, mapGetters} from "vuex";
import GameList from "./GameList";

export default {
  name: "AllGames",
  components: {GameList},
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.link {
  padding-right: 40px;
}
</style>
