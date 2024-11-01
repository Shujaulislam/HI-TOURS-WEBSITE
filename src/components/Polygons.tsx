import React from 'react'

function Polygons() {
  return (
    <div className='w-full h-[750px] relative'>
        {/* ye hai left wala */}
          <div
          className='bg-orange-700 min-h-full absolute inset-0 border-2 border-black mr-[50%]'
            style={{clipPath: 'polygon(0 0, 80% 25%, 80% 60%, 0% 100%)'}}>
              <p className="text-[120px] font-serif text-[#D14B24] opacity-80 leading-none">04.</p>
              <h2 className="text-white text-5xl font-extralight leading-tight">
            Journeys
            <br />
            that
            <br />
            can't be
            <br />
            beat.
          </h2>
          </div>

        {/*ye hai right wala  */}
          {/* <div
            className='absolute inset-0 border-2 border-black ml-auto'
            style={{clipPath: 'polygon(20% 0%, 100% 0, 85% 100%, 0% 100%)',
              border: '2px solid black'
            }}>
              
          </div> */}

      </div>
  )
}

export default Polygons
