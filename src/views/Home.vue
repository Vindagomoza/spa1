<template>
  <div class="home">
  <AllGames msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllGames from '@/components/AllGames.vue'

export default {
  name: 'Home',
  components: {
    AllGames
  }
}
</script>
