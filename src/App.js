import React, { useState } from 'react';
import Search from './component/search';
import Paginationopen from './component/paginationopen';
import Pagination from './component/pagination';


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
    <div className="container mx-auto p-4 2xl:px-8">
      <h3 className="text-3xl font-bold ">Trades</h3>

      <Search />



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




      {/* Pagination and select Section  For Open Trades*/}
      <Paginationopen />




      {/* Closed Trades Section  */}



      {/* search section */}
      <Search />


      {/* table */}
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


      {/* Showing and Pagination section ForClosed Trade*/}
      <Pagination />

    </div >
  )
}

export default TradeTable
