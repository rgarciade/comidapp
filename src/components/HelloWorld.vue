<script lang="ts" setup>
  import { ref } from 'vue'
  import { useExampleStatusStore } from '@/status/exampleStatus/index'

  defineProps<{
    msg: string
  }>()

  const store = useExampleStatusStore()

  const name: string = 'HelloWorld'
  const count = ref(0)

  const changeText = () => {
    store.changeTextoPrueba(`new texts ${count.value}`)
  }
</script>

<template>
  <h1>aa{{ msg }}</h1>
  <h1>{{ name }}--{{ store.textoPrueba }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <button @click="changeText">cambia texto</button>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
