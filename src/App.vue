<template>
  <div id="app" class="flex items-center justify-center">
    <app-character-creation :classList="classes"></app-character-creation>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CharacterCreation from "./components/CharacterCreation/CharacterCreation.vue";
import { ClassList } from "@/collections/ClassList";

export default Vue.extend({
  name: "App",
  components: {
    appCharacterCreation: CharacterCreation,
  },
  data() {
    return {
      classes: ClassList,
    };
  },
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
