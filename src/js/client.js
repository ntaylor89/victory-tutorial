import { Component } from 'react'
import ReactDOM from 'react-dom'
import * as V from 'victory'

class Main extends Component {
  render () {
    return (
      <div>
        <h1>Victory Tutorial</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)

