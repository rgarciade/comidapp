<script lang="ts" setup>
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
  })
</script>
<template>
  <div id="servings" class="bg-amber-100 p-2 pl-4 pr-4 rounded-full">
    {{ props.text }}
  </div>
</template>
