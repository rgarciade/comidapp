import { defineStore } from 'pinia'

type State = {
  count: number
  name: string
  textoPrueba: string
}
export const useExampleStatusStore = defineStore('exampleStatus', {
  state: () =>
    ({
      count: 0,
      name: 'pepe',
      textoPrueba: 'textoPrueba1',
    } as State),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    changeTextoPrueba(textoPrueba: string) {
      this.textoPrueba = textoPrueba
    },
  },
})
