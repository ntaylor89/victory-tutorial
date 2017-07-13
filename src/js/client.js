import { Component } from 'react'
import ReactDOM from 'react-dom'
import { VictoryBar, VictoryChart } from 'victory'

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
]

class Main extends Component {
  render () {
    return (
      <VictoryChart>
        <VictoryBar
          data={data}
          // data accessor for x & y values
          x='quarter'
          y='earnings'
        />
      </VictoryChart>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)

