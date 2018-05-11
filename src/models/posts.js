// import fetch from 'fetch'

import axios from 'axios'
import { dispatch } from '@rematch/core'

export const posts = {
  state: {firstPost:{}}, // initial state
  reducers: {
    // handle state changes with pure functions
    // different approach than usual redux, where the action would have
    //   a {type: , payload: } parameter.  The developer needs to call an 
    //   effect is there are side-effects, but hopefully the names are 
    //   proper to allow correct use by a developer.
    updateFirstPost(state, data) {
      return { firstPost: Object.assign({}, data)}
      //return {...state, firstPost: data}
    }
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async getFirstPost( rootState) {
     // const updateFirstPost = this.updateFirstPost
      await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
          console.log(response.data);
          //updateFirstPost( response.data)
          dispatch.posts.updateFirstPost(  response.data)
          //{userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"}
        })
        .catch(function (error) {
          console.log(error);
         /// updateFirstPost({error: 'Failed to retrieve first post.'})
        });
    }
  }
}