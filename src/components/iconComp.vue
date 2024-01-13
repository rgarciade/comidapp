<script lang="ts" setup>
import { ref } from 'vue'

  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      default: '',
    },
  })
  const iconUrl = ref(`src/assets/icons/${props.src}.svg`)
  const classValue = ref(props.class)
</script>
<template>
  <img :class="classValue" :src="iconUrl" :alt="src" />
</template>
