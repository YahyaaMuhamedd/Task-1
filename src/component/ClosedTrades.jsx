import React, { useState } from 'react'


const ClosedTrades = () => {
  // Usestate to store data for closedtradess
  const [closedTrades, setClosedTrades] = useState([
    {
      openedAt: '07-11-2023',
      SecondTime: '10:01:33',
      closedAt: '07-11-2023',
      asset: 'BTC/USDT',
      amount: '27 USD',
      openingValue: '0.279',
      curreny: 'USD',
      currentValue: '0.279',
      qty: '96.484',
      categoery: 'SUGAR',
      direction: 'Buy',
      pnl: '8.232',
      status: 'Won',
    },
    {
      openedAt: '07-11-2023',
      SecondTime: '10:01:33',
      closedAt: '07-11-2023',
      asset: 'BTC/USDT',
      amount: '27 USD',
      openingValue: '0.279',
      curreny: 'USD',
      currentValue: '0.279',
      qty: '96.484',
      categoery: 'SUGAR',
      direction: 'Sell',
      pnl: '-8.232',
      status: 'Lose',
    }
  ])
  return (
    <div>
       <div className="overflow-x-auto border-2 rounded-xl my-6 w-full">
        <table className="w-full bg-white">
          <thead>
            <tr className='bg-[#f7f7f7] border-b-2'>
              <th className="text-left py-3 px-12   font-semibold text-sm text-blue-700 opacity-[0.5]">Opened <br /> At</th>
              <th className="text-left py-3  px-9   font-semibold text-sm text-blue-700 opacity-[0.5]">Closed <br /> At</th>
              <th className="text-center py-3 px-5  font-semibold text-sm text-blue-700 opacity-[0.5]">Asset</th>
              <th className="text-center py-3 px-5 font-semibold text-sm text-blue-700 opacity-[0.5]">Amount</th>
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
            {closedTrades.map((trade, index) => (
              <tr key={index}>
                <td className="text-left py-6 px-10 text-lg">{trade.openedAt} <br />{trade.SecondTime} </td>
                <td className="text-left py-6 px-5 text-lg">{trade.closedAt}<br />{trade.SecondTime}</td>
                <td className="text-center py-6 px-5 text-lg">{trade.asset}</td>
                <td className="text-center py-6 px-5 text-lg"> {trade.amount}</td>
                <td className="text-left py-6 px-5 text-lg">{trade.openingValue} <br /> {trade.curreny} </td>
                <td className="text-left py-6 px-5 text-lg">{trade.currentValue} <br /> {trade.curreny} </td>
                <td className="text-center py-6 px-5 text-lg">{trade.qty}<br />{trade.categoery}</td>
                <td className="text-center py-6 px-5 text-lg">{trade.direction}</td>
                <td className="text-center py-6 px-5 text-lg">{trade.pnl}</td>
                <td className="text-center py-6 px-5 text-lg">
                  <span className={`py-2 px-3 rounded-full text-xs ${trade.status === 'Won' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
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

export default ClosedTrades
