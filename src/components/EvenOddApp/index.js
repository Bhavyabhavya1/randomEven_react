import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState({count: Math.floor(Math.random() * 101)})
  }

  render() {
    const {count} = this.state
    let text
    if (count % 2 === 0) {
      text = 'Even'
    } else {
      text = 'Odd'
    }
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {text}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para1">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
