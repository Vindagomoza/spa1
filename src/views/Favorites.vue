<template>
  <div class="favorites">
    <FavoriteGames msg="Favorites Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FavoriteGames from '@/components/FavoriteGames.vue'

export default {
  name: 'Favorites',
  components: {
    FavoriteGames
  }
}
</script>
