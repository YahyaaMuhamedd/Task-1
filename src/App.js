import React, { useState } from 'react';
import Search from './component/search';
import Paginationopen from './component/paginationopen';
import Pagination from './component/pagination';
import OpenTrades from './component/OpenTrades';
import ClosedTrades from './component/ClosedTrades';


const TradeTable = () => {




  return (
    <div className="container mx-auto p-4 2xl:px-8">
      <h3 className="text-3xl font-bold ">Trades</h3>
      {/* Open Trades Section  */}
      <Search />
      <OpenTrades />
      <Paginationopen />


      {/* Closed Trades Section  */}

      <Search />
      <ClosedTrades />
      <Pagination />

    </div >
  )
}

export default TradeTable
