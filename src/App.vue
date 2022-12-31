<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <p>asfassfa</p>
  <!-- <HelloWorld msg="Vite =+ Vue" />-->
  <ExampleCompVue />
  <div class="bg-blue-500">
    <h1>holaafsa</h1>
  </div>
  <p>asfasfa</p>
</template>

<script lang="ts" setup>
  import HelloWorld from './components/HelloWorld.vue'
  import ExampleCompVue from './components/ExampleComp.vue'
  import '@/assets/tailwind.css'
</script>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
