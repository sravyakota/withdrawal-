// Write your code here

import './index.css'

const Denomination = props => {
  const {amount, changeAmount} = props

  const onDenomination = () => {
    changeAmount(amount)
  }

  return (
    <li>
      <div>
        <button className="button" type="button" onClick={onDenomination}>
          {amount}
        </button>
      </div>
    </li>
  )
}

export default Denomination
