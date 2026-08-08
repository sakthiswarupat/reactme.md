/*

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import InputBox from './components/index.js'

function App() {
  const [count, setCount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  //hooks
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])

  return (
    <div 
    className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
      `url('https://media.istockphoto.com/id/2215420460/photo/piles-of-new-indian-currency-notes-rupees-50-200-and-500.jpg?b=1&s=612x612&w=0&k=20&c=wYkI90k2NeCu34Qo_FydVrYl1-Wpic7NpPpvdl3RdZM=')`,}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg 
        p-5 backdrop-blur-sm bg-white-30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox 
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setFrom
                (currency)}
              onAmountChange={(amount)=>setAmount(amount)}
              selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
                <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 
                border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
                >swap</button>
            </div>
            <div className='w-full mb-1'>
                <InputBox 
                label="to"
                amount={amount}
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
                />
            </div>
            <button 
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase} </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

*/


import { useState } from "react";

const currencies = ["USD", "INR", "EUR", "GBP", "JPY"];

export default function App() {
  const [amount, setAmount] = useState(10);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState(832.14);

  const rates = {
    USD: 83.21,
    INR: 1,
    EUR: 97.5,
    GBP: 113.2,
    JPY: 0.56,
  };

  const convert = () => {
    const inr = amount * rates[from];
    const converted = inr / rates[to];
    setResult(converted.toFixed(2));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(result);
    setResult(amount);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-[380px] border border-white/30">
        
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between text-gray-500 text-sm">
            <span>From</span>
            <span>Currency Type</span>
          </div>

          <div className="flex justify-between items-center mt-3">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="outline-none text-xl w-24"
            />

            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="border rounded-md p-2"
            >
              {currencies.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center -my-3 relative z-10">
          <button
            onClick={swap}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg"
          >
            Swap
          </button>
        </div>

        
        <div className="bg-white rounded-xl p-4 mt-2">
          <div className="flex justify-between text-gray-500 text-sm">
            <span>To</span>
            <span>Currency Type</span>
          </div>

          <div className="flex justify-between items-center mt-3">
            <input
              type="text"
              value={result}
              readOnly
              className="outline-none text-xl w-28 bg-transparent"
            />

            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="border rounded-md p-2"
            >
              {currencies.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={convert}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl mt-6 transition"
        >
          Convert {from} to {to}
        </button>
      </div>
    </div>
  );
}

