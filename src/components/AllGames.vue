<template>
  <div>
    <h2>Games page</h2>
    <div class="container">
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
            <button
                :class="isFavorite(item)"
                @click="addToFavorites(item)"
            >Add to Fav</button>
          </div>
        </div>
      </div>
    </div>
    <router-link class="link" to="/">All Games</router-link>
    <router-link class="link" to="/favorites">Favorites({{favoritesCount}})</router-link>
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
    fav(){
      this.button.set.text('unfavorite')
    },
    isFavorite(game) {
      if (this.getFavorites.includes(game.id)) {
        return 'favorite-game'
      }
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
