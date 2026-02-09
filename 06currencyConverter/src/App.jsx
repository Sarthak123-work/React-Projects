import { useState } from 'react'
import './App.css'
import { InputBox } from './components/Index'
import useCurrencyInfo from './hooks/usecurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <InputBox
        label="From"
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        selectCurrency={from}
        onAmountChange={(amount) => setAmount(amount)}
      />

      <InputBox
        label="To"
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setTo(currency)}
        selectCurrency={to}
        amountDisable
      />
    </>
  )
}

export default App
