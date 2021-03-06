import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router'
import { Provider, connect } from 'react-redux'
import { select } from '@rematch/select'

const Count = props => (
  <div>
    The count is {props.count}
    <button onClick={props.increment}>increment</button>
    <button onClick={props.incrementAsync}>incrementAsync</button>

    The count is {props.countBy2}
    <button onClick={props.increment2}>increment2</button>
    <button onClick={props.incrementAsync2}>incrementAsync2</button>

    The squared count is {props.squared}

    <button onClick={props.getFirstPost}>Fetch Data</button>
    <h3> First Post: </h3>
    <p>{JSON.stringify(props.firstPost)}</p>
  </div>
)

const mapState = state => ({
  count: state.count,
  countBy2: state.countBy2,
  squared: select.count.squared(state),
  firstPost: state.posts.firstPost
})

// const mapDispatch = ({ count: {increment, incrementAsync},  countBy2: { incrementBy2: increment2, incrementAsync2 } }) => ({
const mapDispatch = dispatch => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
  increment2: () => dispatch.countBy2.increment(1),
  incrementAsync2: () => dispatch.countBy2.incrementAsync(1),
  getFirstPost: () => dispatch.posts.getFirstPost()
})

const CountContainer = withRouter(connect(mapState, mapDispatch)(Count))

export default CountContainer