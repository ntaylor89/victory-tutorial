import { Component } from 'react'
import ReactDOM from 'react-dom'
import * as V from 'victory'

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
]

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

