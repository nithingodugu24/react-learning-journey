import React from 'react'
import './input.css'

function Input({
    label,
    amount,
    onAmountChange,
    currency,
    onCurrencyChange,
    currencyOptions,
    isDisabled
}) {
  return (
    <div className='input-box'>
      <div className="amount-options col">
        <label htmlFor='amount'>{label}</label>
        <input 
        id='amount'
        disabled= {isDisabled}
        onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        value={amount}
         />
      </div>

      <div className="currecny-options col">
        <label htmlFor='currency'>Currency Type</label>
        <select 
        className='select-currency'
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        value={currency}
        >
           {currencyOptions.map((curr)=> (
            <option value={curr}>{curr}</option>
           ))}

        </select>
      </div>
    </div>
  )
}

export default Input
