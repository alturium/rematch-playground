import { init, dispatch } from '@rematch/core'
import delay from './makeMeWait.js'

const count = {
  state: 0,
  reducers: {
    increment: (state, payload) => state + payload,
    decrement: (state, payload) => state - payload,
  },
  effects: {
    async incrementAsync(payload) {
      await delay(1000)
      this.increment(payload)
    }
  }
}

const store = init({
  models: { count },
  redux: { /* configure redux here */ }
})

dispatch.count.incrementAsync(1) // wait, then state = 1