<script lang="ts" setup>
  import { ref } from 'vue'

  const ingredients = [
    {
      name: 'Lechuga',
      quantity: '1',
      unit: 'unidad',
    },
    {
      name: 'Pepino',
      quantity: '1',
      unit: 'unidad',
    },
    {
      name: 'Tomate',
      quantity: '2',
      unit: 'unidad',
    },
    {
      name: 'Cebolla',
      quantity: '1/2',
      unit: 'unidad',
    },
    {
      name: 'Aceite de oliva',
      quantity: '1',
      unit: 'cucharada',
    },
    {
      name: 'Vinagre',
      quantity: '1',
      unit: 'cucharada',
    },
    {
      name: 'Sal',
      quantity: '1',
      unit: 'pizca',
    },
    {
      name: 'Pimienta',
      quantity: '1',
      unit: 'pizca',
    },
    {
      name: 'Queso feta',
      quantity: '100',
      unit: 'gramos',
    },
  ]
  const steps = [
    {
      name: 'Lavar y cortar la lechuga',
    },
    {
      name: 'Lavar y cortar el pepino',
    },
    {
      name: 'Lavar y cortar el tomate',
    },
    {
      name: 'Pelar y cortar la cebolla',
    },
    {
      name: 'Mezclar todos los ingredientes',
    },
    {
      name: 'Aliñar con aceite, vinagre, sal y pimienta',
    },
  ]
  const cookingTime = 25
  const servings = 2
  const seeStartCooking = ref(false)

  addEventListener('scroll', () => {
    window.scrollY < 100
      ? (seeStartCooking.value = false)
      : (seeStartCooking.value = true)
  })
</script>

<template>
  <div class="flex-col h-screen">
    <div class="flex-none h-3/6">
      <IconComp
        src="bookmark"
        class="w-14 absolute right-4 bg-white rounded-full p-2 top-3"
      />

      <img
        class="h-full object-cover w-full"
        src="https://www.comedera.com/wp-content/uploads/2021/12/ensalada-de-lechuga1.jpg"
        alt="receta"
      />
    </div>
    <div
      class="flex-initial h-2/6 rounded-t-3xl -mt-10 w-full absolute bg-white p-10 pt-10"
    >
      <h3 class="font-bold">Grilled fist whith tomatoes & mushrooms</h3>
      <div id="info" class="flex pt-10 border-b-2 pb-8">
        <div class="flex w-11/12 gap-4 pr-44">
          <div
            id="cooking-time"
            class="flex-none bg-amber-100 p-2 pl-4 pr-4 rounded-full"
          >
            {{ cookingTime }} min
          </div>
          <div
            id="servings"
            class="flex-none flex-none bg-amber-100 p-2 pl-4 pr-4 rounded-full"
          >
            {{ servings }} raciones
          </div>
        </div>
        <IconComp src="add" class="w-10" />
      </div>
      <div id="ingredients" class="pt-5 pb-12">
        <h3 class="font-bold pb-2 pt-2">Ingredientes</h3>
        <ul class="list-none text-2xl">
          <li
            v-for="ingredient in ingredients"
            :key="ingredient"
            class="pt-3 flex gap-2"
          >
            <IconComp src="check" class="w-8 h-8" />
            <p>
              {{ ingredient.quantity }} {{ ingredient.unit }} de
              {{ ingredient.name }}
            </p>
          </li>
        </ul>
      </div>
      <div id="steps" class="pt-5 pb-28">
        <h3 class="font-bold pb-2 pt-2">Pasos</h3>
        <ul class="list-none text-2xl">
          <li v-for="step in steps" :key="step" class="pt-3 flex gap-2">
            <span class="w-4 mt-4 mb-4 h-1 bg-primary"></span>
            <p>
              {{ step.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div
    v-if="seeStartCooking"
    id="start"
    class="h-16 w-11/12 bg-primary object-center rounded-full place-self-center flex gap-2 items-center justify-center fixed bottom-6 ml-auto mr-auto left-0 right-0"
  >
    <IconComp src="right-arrow-white" class="h-10 border-2 p-2 rounded-full" />
    <p class="text-white font-extrabold">¿Listo? Comenzar a cocinar</p>
  </div>
</template>
