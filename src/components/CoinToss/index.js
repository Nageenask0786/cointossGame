import {Component} from 'react'

import './index.css'

const HeadsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

// Write your code here

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, tossImageUrl: HeadsImageUrl}

  clickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {headsCount, tailsCount} = this.state
    let tossImage = ''
    let latestHCount = headsCount
    let latestTCount = tailsCount
    if (tossResult === 0) {
      tossImage = HeadsImageUrl
      latestHCount += 1
    } else {
      tossImage = TailsImageUrl
      latestTCount += 1
    }
    this.setState({
      headsCount: latestHCount,
      tailsCount: latestTCount,
      tossImageUrl: tossImage,
    })
  }

  render() {
    const {headsCount, tailsCount, tossImageUrl} = this.state
    const total = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossImageUrl} alt="toss result" />

          <button
            className="button"
            type="button"
            onClick={this.clickTossButton}
          >
            Toss Coin
          </button>
          <div className="tosses">
            <p>Total: {total}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
