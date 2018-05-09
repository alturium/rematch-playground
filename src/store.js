import { init } from '@rematch/core'
import { select as selector } from '@rematch/select'
import selectorsPlugin from '@rematch/select'
import * as models from './models'

const select = selectorsPlugin()

const store = init({
  models,
  plugins: [select]
})

// console.log(selector.count.doubled(store.getState()))

export default store