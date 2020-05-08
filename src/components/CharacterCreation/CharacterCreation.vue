<template>
  <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
          >Class</label
        >
        <div class="relative">
          <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option v-for="(item, index) in classList" :key="index">
              {{ item.name }}
            </option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-max-hit-points"
          >Hit Points</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-max-hit-points"
          type="number"
          v-model="hitPoints"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-armour-class"
          >Amour Class</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-armour-class"
          type="number"
          v-model="armourClass"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <div class="text-center text-gray-700">{{ strengthModifier }}</div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-strength"
          >Stength</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-strength"
          type="number"
          min="8"
          max="20"
          v-model="strength"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <div class="text-center text-gray-700">{{ dexterityModifier }}</div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-dexterity"
          >Dexterity</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-dexterity"
          type="number"
          min="8"
          max="20"
          v-model="dexterity"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <div class="text-center text-gray-700">{{ constitutionModifier }}</div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-constitution"
          >Constitution</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-constitution"
          type="number"
          min="8"
          max="20"
          v-model="constitution"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <div class="text-center text-gray-700">{{ wisdomModifier }}</div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-wisdom"
          >Wisdom</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-wisdom"
          type="number"
          min="8"
          max="20"
          v-model="wisdom"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <div class="text-center text-gray-700">{{ intelligenceModifier }}</div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-intelligence"
          >Intelligence</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-intelligence"
          type="number"
          min="8"
          max="20"
          v-model="intelligence"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <div class="text-center text-gray-700">{{ charismaModifier }}</div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-charisma"
          >Charisma</label
        >
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-charisma"
          type="number"
          min="8"
          max="20"
          v-model="charisma"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import Creature from "@/interfaces/Creature";
import Class from "@/interfaces/Class";

export default Vue.extend({
  props: {
    classList: {
      type: Array as () => Array<Class>,
      required: true
    }
  },
  data() {
    return {
      maxHitPoints: 10,
      armourClass: 10,
      strength: 10,
      dexterity: 10,
      constitution: 10,
      wisdom: 10,
      intelligence: 10,
      charisma: 10,
      classId: Number
    };
  },
  computed: {
    strengthModifier(): number {
      return this.getModifier(this.strength);
    },
    dexterityModifier(): number {
      return this.getModifier(this.dexterity);
    },
    constitutionModifier(): number {
      return this.getModifier(this.constitution);
    },
    wisdomModifier(): number {
      return this.getModifier(this.wisdom);
    },
    intelligenceModifier(): number {
      return this.getModifier(this.intelligence);
    },
    charismaModifier(): number {
      return this.getModifier(this.charisma);
    },
    hitPoints(): number {
      const characterClass = this.classList[0];

      return characterClass.hitDie + this.constitutionModifier;
    }
  },
  methods: {
    getModifier(score: number): number {
      const mod = Math.floor(score / 2 - 5);
      return mod;
    }
  }
});
</script>

<style scoped></style>
