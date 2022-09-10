// Write your code here
import {Component} from 'react'

import Denomination from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {total: 2000}

  changeAmount = amount => {
    this.setState(prevState => ({
      total: prevState.total - amount,
    }))
  }

  render() {
    const {total} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg1">
        <div className="bg2">
          <div className="profile">
            <div>
              <button className="user" type="button">
                S
              </button>
            </div>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balanceBlock">
            <p className="heading2">Your Balance</p>
            <div className="ss">
              <p className="amount">{total}</p>
              <p className="para2">in Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="para2">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list">
            {denominationsList.map(eachDenomination => (
              <Denomination
                amount={eachDenomination.value}
                key={eachDenomination.id}
                changeAmount={this.changeAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
