// Write your code here
// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onUpdateBalance = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button className="button" type="button" onClick={onUpdateBalance}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
