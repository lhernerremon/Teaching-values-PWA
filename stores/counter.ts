import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    number: 0
  }),
  actions: {
    incrementNumber () { this.number++ }
  }
})
