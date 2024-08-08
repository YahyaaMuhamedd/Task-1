import React, { useState } from 'react'


const OpenTrades = () => {
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
  return (
    <div>
       {/*  table */}
       <div className="overflow-x-auto border-2 rounded-xl my-6 w-full">
        <table className="w-full bg-white">
          <thead>
            <tr className='bg-[#f7f7f7] border-b-2'>
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
            {/* make maping to opentrade to generate the dataa */}
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
    </div>
  )
}

export default OpenTrades
