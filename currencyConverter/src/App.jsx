import { useCallback, useState } from 'react'
import './App.css'
import Input from './components/Input'
import useCurrency from './hooks/useCurrencyData'

function App() {

  const [amount, setAmount] = useState(1)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')

  const currencyInfo = useCurrency(true)
  const options = Object.keys(currencyInfo)

  const convert = ()=>{
    setConvertedAmount((amount / currencyInfo[from]) * currencyInfo[to])
  }

  const swap = ()=>{
    setFrom(to)
    setTo(from)
  }

  return (
    <>
    <div className="main">
      <div className="content">
        <form onSubmit={(e)=>{
          e.preventDefault()
          convert()
        }}>
        <Input 
        label='From'
        amount={amount}
        onAmountChange={setAmount}
        currency={from}
        onCurrencyChange={setFrom}
        isDisabled={false}
        currencyOptions={options}
        />
        <button 
        className='swap'
        onClick={()=>swap()}
        >Swap </button>
       <Input 
        label='To'
        amount={convertedAmount}
        onAmountChange={setConvertedAmount}
        currency={to}
        onCurrencyChange={setTo}
        isDisabled={true}
        currencyOptions={options}
        />
        <button
        className='convert'
        type='submit'
        >Convert</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
