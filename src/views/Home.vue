<template>
  <div class="home">
  <AllGames/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllGames from '@/components/AllGamesContainer.vue'

export default {
  name: 'Home',
  components: {
    AllGames
  }
}
</script>
