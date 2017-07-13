import { Component } from 'react'
import ReactDOM from 'react-dom'

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

