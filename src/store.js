import { init } from '@rematch/core'
import { select as selector } from '@rematch/select'
import selectorsPlugin from '@rematch/select'
import * as models from './models'

const select = selectorsPlugin()

// If you are using an Immutable.js Map as your store, you will need to slice the state using Map.get():

// const select = selectorsPlugin({ sliceState: (rootState, model) => rootState.get(model.name) })
// Now you can use an Immutable.js Map as your store and access the appropriate slice of the state in each of your selectors.

const store = init({
  models,
  plugins: [select]
})

// console.log(selector.count.doubled(store.getState()))

export default store