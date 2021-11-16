<template>
  <div>
    <h2>Favorite Games</h2>
    <div class="container">
      <div class="game"  v-for="item in getFavGames" :key="item +'1'">
        <p class="game-name">
          {{item.title}}
        </p>
        <div class="game-content">
          <img
              class="game-image"
              v-bind:src="'https://picsum.photos/id/' + item.id + '/200/200'"
              alt="Game logo missing"
          >
          <div class="game-buttons">
            <button v-if="item.hasDemo">DEMO</button>
            <button
                :class="isFavorite(item)"
                @click="addToFavorites(item)"
            >{{ favorite ? 'Unfavorite' : 'Favorite' }}</button>
          </div>
        </div>
      </div>
    </div>
    <router-link class="link" to="/">All Games</router-link>
    <router-link class="link" to="/Favorites">Favorites({{favoritesCount}})</router-link>
  </div>
</template>

<script>


import {mapActions, mapGetters} from "vuex";

export default {
  name: "AllGames",
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
        return 'favorite-game'
      }
    },
  },
  computed: {
    ...mapGetters(['getAllGames', 'getFavorites', 'favoritesCount',"getFavGames"])
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

.favorite-game {
  background-color: red;
}

.game-buttons,
.container {
  display: flex;
  flex-direction: column;
  padding-left: 40px;
}

.game-name {
  width: 100%;
  text-align: start;
}

.game {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  width: 300px;
}

.game-content {
  display: flex;
  flex-direction: row;
}

.game-buttons {
  justify-content: space-between;
  padding-left: 20px;
}
</style>
