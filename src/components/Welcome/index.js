import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onClickSubscribed = () => {
    this.setState({isSubscribe: false})
  }

  onClickSubscribe = () => {
    this.setState({isSubscribe: true})
  }

  render() {
    const {isSubscribe} = this.state

    return (
      <div className="bg">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>

        {isSubscribe ? (
          <button type="button" onClick={this.onClickSubscribed}>
            Subscribed
          </button>
        ) : (
          <button type="button" onClick={this.onClickSubscribe}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
