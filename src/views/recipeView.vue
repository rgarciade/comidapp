<script lang="ts" setup>
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
  ]
  const cookingTime = 25
  const servings = 2
</script>

<template>
  <div class="flex-col h-screen">
    <div class="flex-none h-3/6">
      <img
        src="../assets/bookmark.svg"
        class="w-14 absolute right-4 bg-white rounded-full p-2 top-3"
      />
      <img
        class="h-full object-cover"
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
        <img src="../assets/add.svg" class="w-10" />
      </div>
      <div id="ingredients" class="pt-5 pb-12">
        <ul class="list-none text-2xl">
          <li
            v-bind:key="ingredient"
            v-for="ingredient in ingredients"
            class="pt-3 flex gap-2"
          >
            <img src="../assets/check.svg" class="w-8 h-8" />
            <p>
              {{ ingredient.quantity }} {{ ingredient.unit }} de
              {{ ingredient.name }}
            </p>
          </li>
        </ul>
      </div>
      <div id="start" class="pb-10 flex-col grid gap-4 place-content-center">
        <img
          src="src/assets/right-arrow-white.svg"
          class="w-16 bg-primary object-center rounded-full p-4 place-self-center"
        />
        <p class="text-primary font-extrabold">¿Listo? Comenzar a cocinar</p>
      </div>
    </div>
  </div>
</template>
