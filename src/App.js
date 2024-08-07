import React, { useState } from 'react';

const TradeTable = () => {
  // usestate to store data for opentrades
  const [openTrades, setOpenTrades] = useState([
    {
      openedAt: '07-11-2023',
      SecondTime: '10:01:33',
      asset: 'BTC/USDT',
      leverage: 1,
      dollar: '$',
      amount: 16.45,
      openingValue: '9.279',
      curreny: 'USD',
      currentValue: '3.279',
      qty: '96.484 ',
      categoery: 'SUGAR',
      direction: 'Sell',
      pnl: '-$8.232',
      status: 'Running',
    },
    {
      openedAt: '07-11-2023',
      SecondTime: '10:01:33',
      asset: 'BTC/USDT',
      leverage: 1,
      dollar: '$',
      amount: 27.45,
      openingValue: '5.279',
      curreny: 'USD',
      currentValue: '3.279',
      qty: '96.484 ',
      categoery: 'SUGAR',
      direction: 'Buy',
      pnl: '+$8.232',
      status: 'Running',
    },
    {
      openedAt: '07-11-2023',
      SecondTime: '10:01:33',
      asset: 'BTC/USDT',
      leverage: 1,
      dollar: '$',
      amount: 38.45,
      openingValue: '0.279',
      curreny: 'USD',
      currentValue: '1.279',
      qty: '96.484 ',
      categoery: 'SUGAR',
      direction: 'Buy',
      pnl: '$8.232',
      status: 'Running',
    }
  ])

  // Usestate to store data for closedtradess
  const [closedTrades, setClosedTrades] = useState([
    {
      openedAt: '07-11-2023 10:01:33',
      closedAt: '07-11-2023 10:01:33',
      asset: 'BTC/USDT',
      amount: '27 USD',
      openingValue: '0.279 USD',
      currentValue: '0.279 USD',
      qty: '96.484',
      categoery: 'SUGAR',
      direction: 'Buy',
      pnl: '8.232',
      status: 'Won',
    },
    {
      openedAt: '07-11-2023 10:01:33',
      closedAt: '07-11-2023 10:01:33',
      asset: 'BTC/USDT',
      amount: '27 USD',
      openingValue: '0.279 USD',
      currentValue: '0.279 USD',
      qty: '96.484',
      categoery: 'SUGAR',
      direction: 'Sell',
      pnl: '-8.232',
      status: 'Lose',
    }
  ])

  const [activeIndex, setActiveIndex] = useState(0)
  const [activeIndexClosed, setActiveIndexClosed] = useState(0);


  // elements of five buttons 1 to 5 
  const elements = ['1', '2', '3', '4', '5']




  //  funtions to increament every click and pass the class active to the next element
  const Increament = () => {
    setActiveIndex((activeIndex + 1) % elements.length)
  }


  //  funtions to deccreament every click and pass the class active to the previous element

  const Decreament = () => {
    setActiveIndex((activeIndex - 1 + elements.length) % elements.length)
  }


  // functions to increment and decrement activeIndexClosed

  const incrementClosed = () => {
    setActiveIndexClosed((activeIndexClosed + 1) % elements.length);
  }

  const decrementClosed = () => {
    setActiveIndexClosed((activeIndexClosed - 1 + elements.length) % elements.length);
  }

  return (
    <div className="container mx-auto p-4 2xl:px-8">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold ">Open Trades</h2>
        <div className="flex items-center relative flex-wrap gap-2">
          <div className='flex flex-wrap justify-end'>
            <select className="border bg-slate-50 px-3 py-[6.5px] rsvselect ">
              <option value="Search by">Search by</option>
            </select>
            <div className='relative'>
              <input
                type="text"
                className="border px-3 py-1 max-[487px]:mb-2"
                placeholder="Search.."

              />
              <button className="absolute right-[1px] top-0.5 border-none px-3 py-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='gap-2 flex '>
            <button className=" px-2 py-1 rounded bg-white border-2 border-[dodgerblue] shadow-sm shadow-[dodgerblue] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm-2-2a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className=" px-2 py-1 rounded bg-white border-2 border-[dodgerblue] shadow-sm shadow-[dodgerblue] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414l-3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>




      <div className="overflow-x-auto border-2 rounded-xl my-6 w-full">
        <table className="w-full bg-white">
          <thead>
            <tr className='bg-[#f7f7f7]'>
              <th className="text-left py-3 px-10   font-semibold text-sm text-blue-700 opacity-[0.5]">Opened At</th>
              <th className="text-center py-3  px-5   font-semibold text-sm text-blue-700 opacity-[0.5]">Asset</th>
              <th className="text-center py-3 px-5  font-semibold text-sm text-blue-700 opacity-[0.5]">Leverage</th>
              <th className="text-left py-3 px-5 font-semibold text-sm text-blue-700 opacity-[0.5]">Amount</th>
              <th className="text-left py-3 px-5  font-semibold text-sm text-blue-700 opacity-[0.5]">Opening <br /> Value</th>
              <th className="text-left py-3  px-5 font-semibold text-sm text-blue-700 opacity-[0.5]">Current <br /> Value</th>
              <th className="text-center py-3 px-5  font-semibold text-sm text-blue-700 opacity-[0.5]">QTY</th>
              <th className="text-center py-3 px-5 font-semibold text-sm text-blue-700 opacity-[0.5]">Direction</th>
              <th className="text-center py-3 px-5  font-semibold text-sm text-blue-700 opacity-[0.5]">PNL</th>
              <th className="text-center py-3 px-5  font-semibold text-sm text-blue-700 opacity-[0.5]">Status</th>
            </tr>
          </thead>
          <tbody className="text-black font-bold ">
            {/* make maping to opentrade to generate the dynamic dataa */}
            {openTrades.map((trade, index) => (
              <tr key={index}>
                <td className="text-left py-6 px-10 text-lg">{trade.openedAt} <br /> {trade.SecondTime} </td>
                <td className="text-center py-6 px-5 text-lg">{trade.asset}</td>
                <td className="text-center py-6 px-5 text-lg">{trade.leverage}</td>
                <td className="text-left py-6 px-5 text-lg"> {trade.dollar}{trade.amount}</td>
                <td className="text-left py-6 px-5 text-lg">{trade.openingValue} <br /> {trade.curreny} </td>
                <td className="text-left py-6 px-5 text-lg">{trade.currentValue} <br /> {trade.curreny} </td>
                <td className="text-center py-6 px-5 text-lg">{trade.qty}<br />{trade.categoery}</td>
                <td className="text-center py-6 px-5 text-lg">{trade.direction}</td>
                <td className="text-center py-6 px-5 text-lg">{trade.pnl}</td>
                <td className="text-center py-6 px-5 text-lg">
                  <span className={`py-1 px-1 rounded-full text-xs ${trade.status === 'Running' ? 'bg-yellow-400 text-white' : ''}`}>
                    {trade.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>





      <div className="mt-10 mb-10">
        <div className="flex justify-between items-center flex-wrap">
          <div className='flex gap-2 items-center '>
            <p className='text-[#a1a1a1] font-bold'>Showing</p>
            <select className='border-2 rounded-md py-2 px-3 border-[#ededed]'>
              <option value="10">10 </option>
            </select>
            <p> of {openTrades.length + 47}</p>
          </div>
          <div className="flex items-center mr-6">
            <button
              onClick={() => {
                Decreament()
              }}
              className="px-1.5  rounded bg-[#f7f7f7]  mr-2  flex items-center justify-center">
              <svg fill="#000000" width="20px" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"><path d="M11.3,12l3.5-3.5c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-4.2,4.2l0,0c-0.4,0.4-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3l0,0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L11.3,12z"></path></g></svg>
            </button>
            {elements.map((element, index) => (
              <button
                key={index}
                className={`px-2.5 py-1 rounded bg-[#f7f7f7]  mr-2 ${index === activeIndex ? 'active' : ''}`}
                onClick={() => { setActiveIndex(index) }}
              >
                {element}
              </button>
            ))}

            <button
              className={`px-1.5  rounded bg-[#f7f7f7]  mr-2 `}
              onClick={() => { Increament() }}
            >

              <svg fill="#000000" width="20px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" stroke="#000000" stroke-width="0.00024000000000000003" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"><path d="M11.3,12l3.5-3.5c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-4.2,4.2l0,0c-0.4,0.4-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3l0,0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L11.3,12z"></path></g></svg>
            </button>

          </div>
        </div>
      </div>



      {/* Closed Trades Section  */}



      <div className="overflow-x-auto border-2 rounded-xl my-6 w-full">
        <table className="w-full bg-white">
          <thead>
            <tr className='bg-[#f7f7f7]'>
              <th className="text-left py-3 px-10   font-semibold text-sm text-blue-700 opacity-[0.5]">Opened At</th>
              <th className="text-center py-3  px-5   font-semibold text-sm text-blue-700 opacity-[0.5]">Asset</th>
              <th className="text-center py-3 px-5  font-semibold text-sm text-blue-700 opacity-[0.5]">Leverage</th>
              <th className="text-left py-3 px-5 font-semibold text-sm text-blue-700 opacity-[0.5]">Amount</th>
              <th className="text-left py-3 px-5  font-semibold text-sm text-blue-700 opacity-[0.5]">Opening <br /> Value</th>
              <th className="text-left py-3  px-5 font-semibold text-sm text-blue-700 opacity-[0.5]">Current <br /> Value</th>
              <th className="text-center py-3 px-5  font-semibold text-sm text-blue-700 opacity-[0.5]">QTY</th>
              <th className="text-center py-3 px-5 font-semibold text-sm text-blue-700 opacity-[0.5]">Direction</th>
              <th className="text-center py-3 px-5  font-semibold text-sm text-blue-700 opacity-[0.5]">PNL</th>
              <th className="text-center py-3 px-5  font-semibold text-sm text-blue-700 opacity-[0.5]">Status</th>
            </tr>
          </thead>
          <tbody className="text-black font-bold ">
            {/* make maping to opentrade to generate the dynamic dataa */}
            {closedTrades.map((trade, index) => (
              <tr key={index}>
                <td className="text-left py-6 px-10 text-lg">{trade.openedAt} <br /> {trade.SecondTime} </td>
                <td className="text-center py-6 px-5 text-lg">{trade.asset}</td>
                <td className="text-center py-6 px-5 text-lg">{trade.leverage}</td>
                <td className="text-left py-6 px-5 text-lg"> {trade.dollar}{trade.amount}</td>
                <td className="text-left py-6 px-5 text-lg">{trade.openingValue} <br /> {trade.curreny} </td>
                <td className="text-left py-6 px-5 text-lg">{trade.currentValue} <br /> {trade.curreny} </td>
                <td className="text-center py-6 px-5 text-lg">{trade.qty}<br />{trade.categoery}</td>
                <td className="text-center py-6 px-5 text-lg">{trade.direction}</td>
                <td className="text-center py-6 px-5 text-lg">{trade.pnl}</td>
                <td className="text-center py-6 px-5 text-lg">
                  <span className={`py-1 px-1 rounded-full text-xs ${trade.status === 'Running' ? 'bg-yellow-400 text-white' : ''}`}>
                    {trade.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Showing and Pagination section ForClosed Trade*/}

      <div className="mt-10 mb-10">
        <div className="flex justify-between items-center flex-wrap">
          <div className='flex gap-2 items-center '>
            <p className='text-[#a1a1a1] font-bold'>Showing</p>
            <select className='border-2 rounded-md py-2 px-3 border-[#ededed]'>
              <option value="10">10 </option>
            </select>
            <p> of {openTrades.length + 47}</p>
          </div>
          <div className="flex items-center mr-6">
            <button
              onClick={decrementClosed}
              className="px-1.5  rounded bg-[#f7f7f7]  mr-2  flex items-center justify-center">
              <svg fill="#000000" width="20px" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"><path d="M11.3,12l3.5-3.5c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-4.2,4.2l0,0c-0.4,0.4-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3l0,0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L11.3,12z"></path></g></svg>
            </button>
            {elements.map((element, index) => (
              <button
                key={index}
                className={`px-2.5 py-1 rounded bg-[#f7f7f7]  mr-2 ${activeIndexClosed === index ? 'active' : ''}`}
                onClick={() => { setActiveIndexClosed(index) }}
              >
                {element}
              </button>
            ))}

            <button
              className={`px-1.5  rounded bg-[#f7f7f7]  mr-2 `}
              onClick={incrementClosed}
            >

              <svg fill="#000000" width="20px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" stroke="#000000" stroke-width="0.00024000000000000003" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"><path d="M11.3,12l3.5-3.5c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-4.2,4.2l0,0c-0.4,0.4-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3l0,0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L11.3,12z"></path></g></svg>
            </button>

          </div>
        </div>
      </div>
    </div >
  )
}

export default TradeTable
