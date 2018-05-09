import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router'
import { Provider, connect } from 'react-redux'


const Count = props => (
  <div>
    The count is {props.count}
    <button onClick={props.increment}>increment</button>
    <button onClick={props.incrementAsync}>incrementAsync</button>

    The count is {props.countBy2}
    <button onClick={props.increment2}>increment2</button>
    <button onClick={props.incrementAsync2}>incrementAsync2</button>
  </div>
)

const mapState = state => ({
  count: state.count,
  countBy2: state.countBy2
})

const mapDispatch = ({ count: {increment, incrementAsync},  countBy2: { increment2, incrementAsync2 } }) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1),
  increment2: () => increment2(1),
  incrementAsync2: () => incrementAsync2(1)
})

const CountContainer = withRouter(connect(mapState, mapDispatch)(Count))

export default CountContainer