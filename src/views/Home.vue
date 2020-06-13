<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MainPage msg="Vue Typescript Sample Project"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'Home',
  components: {
    MainPage
  }
}
</script>
