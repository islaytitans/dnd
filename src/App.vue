<template>
  <div id="app">
    <app-character-creation></app-character-creation>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CharacterCreation from "./components/CharacterCreation/CharacterCreation.vue";

export default Vue.extend({
  name: "App",
  components: {
    appCharacterCreation: CharacterCreation,
  }
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
