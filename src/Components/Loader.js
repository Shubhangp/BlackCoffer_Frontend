import React from 'react';

const Loader = () => {
  return (
    <div className='select-none w-[100vw] h-[100vh] absolute z-40 flex items-center justify-center bg-[#282c3f]/[0.5]'>
      <div className='relative'>
        <span className="loader"></span>
        <span className='absolute z-50 left-[15%] top-[41%] animate-pulsate'>Loading...</span>
      </div>
    </div>
  )
}

export default Loader;
