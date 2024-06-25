import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DataSection from './DataSection/DataSection';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import FilterData from './FilterData/FilterData';
import Loader from '../Loader';

const Dashboard = () => {
  const [option, setoption] = useState("1");

  const loginData = useSelector((store) => store.login.details);
  const isLoaderOpen = useSelector((store) => store.app.isLoaderOpen);

  if(loginData === "notexist"){
    return (
      <div className="max-h-full w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 flex justify-center">
        <div className='md:w-[30vw] lg:w-[30vw] w-[70vw] h-[100px] bg-[#FFF] rounded-xl drop-shadow-3Xl flex flex-col items-center justify-center'>
          <div className="text-[#000] text-2xl font-figtree font-bold">Please Login First!!!</div>
          <Link to='/' className='w-[18%] bg-[#3E84F8] rounded-[8px] px-4 py-2 text-[#FFF] text-sm text-center font-figtree font-semibold'>OK</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoaderOpen && <Loader />}
      <div className="bg-[#F8FAFF] flex gap-14 py-10 lg:pl-[24vw] pl-10 pr-5">
        <Sidebar setoption={setoption} option={option} />
        {option === "1" && <DataSection />}
        {option === "2" && <FilterData />}
      </div>
    </>
  );
}

export default Dashboard;