<template>
  <div>
    <ul>
      <li v-for="item in games" :key="item.games">
        {{ item.title }}
        <img src="../assets/logo.png" alt="Game logo missing">
        <button class="favorites" v-show="item.isFavorite === false" v-on:click="addFavorite(item)">♡</button>
        <button class="favorites" v-show="item.isFavorite === true" v-on:click="removeFavorite(item)">Remove fav
        </button>
        <button class="demo" v-show="item.hasDemo === true">DEMO</button>
      </li>
      <button class="test" v-on:click="favoritesCount(games)">TEST</button>
    </ul>
    <br>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/favorites" v-for="item in games" :key="item.games">Favorites
      </router-link>
    </div>
  </div>
</template>

<script>
import states from "../data/data.json";

export default {
  name: "HelloWorld",
  computed: {
    games() {
      return states.games.map((item) => {
        return item;
      })
    }
  },
  methods: {
favoritesCount(games){
  for (let i = 0; i < games.length; i++){
    console.log(games.isFavorite)
    if (games.isFavorite === true){
      i= i+1;
      console.log(i);
    }
  }
},
addFavorite(item)
{
  console.log(item.isFavorite)
  item.isFavorite = true;
  console.log(item.isFavorite)
}
,
removeFavorite(item)
{
  console.log(item.isFavorite)
  item.isFavorite = false;
  console.log(item.isFavorite)
}
},
}
;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
