import React, { useState } from 'react'



const Pagination = () => {
 
    const [activeIndexClosed, setActiveIndexClosed] = useState(0);
  
  
     // elements of five buttons
     const elements = ['1', '2', '3', '4', '5']
  
  
    // functions to increment and decrement activeIndexClosed
  
    const incrementClosed = () => {
      setActiveIndexClosed((activeIndexClosed + 1) % elements.length);
    }
  
    const decrementClosed = () => {
      setActiveIndexClosed((activeIndexClosed - 1 + elements.length) % elements.length);
    }
  
  return (
    <div>
      <div className="mt-10 mb-10">
        <div className="flex justify-between items-center flex-wrap ">
          <div className='flex gap-2 items-center mb-4'>
            <p className='text-[#a1a1a1] font-bold'>Showing</p>
            <select className='border-2 rounded-md py-2 px-3 border-[#ededed]'>
              <option value="10">10 </option>
            </select>
            <p> of 50</p>
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
    </div>
  )
}

export default Pagination
