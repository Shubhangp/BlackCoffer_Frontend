import React, { useEffect, useState } from 'react';
import BarCharts from './BarCharts';
import { useDispatch } from 'react-redux';
import { loginData } from '../../../Utils/loginSlice';
import { toogleLoader } from '../../../Utils/appSlice';
import { useNavigate } from 'react-router-dom';
import PieCharts from './PieCharts';
import ScatterCharts from './ScatterCharts';

const DataSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    dispatch(toogleLoader());
    const res = await fetch('https://blockcoffer-backend.vercel.app/api/v1/industrydata');
    const industrydata = await res.json();
    setData(industrydata.data.industryData);
    dispatch(toogleLoader());
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    const newData = data.filter(item => item.country === country);
    setFilteredData(newData);
  };

  const handleSignOut = () => {
    dispatch(loginData("notexist"));
    navigate('/');
  }

  return (
    <>
      <div className="w-full">
        <div className="w-full py-5 flex flex-col gap-7">
          <div className="flex justify-between">
            <h1 className="text-[#000] text-2xl font-montserrat font-bold">
              Chart Section
            </h1>
            <div className="flex items-center gap-5">
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                >
                  <path
                    d="M16.3861 12.6564V8.91122C16.3861 5.55139 14.2011 2.72107 11.2411 1.86988C10.9481 1.09912 10.2321 0.55603 9.38611 0.55603C8.54011 0.55603 7.82411 1.09912 7.53111 1.86988C4.57111 2.72211 2.38611 5.55139 2.38611 8.91122V12.6564L0.679109 14.4392C0.586067 14.536 0.512279 14.6511 0.461994 14.7778C0.411709 14.9046 0.385919 15.0404 0.386109 15.1776V17.2664C0.386109 17.5434 0.491466 17.809 0.679003 18.0049C0.866539 18.2008 1.12089 18.3108 1.38611 18.3108H17.3861C17.6513 18.3108 17.9057 18.2008 18.0932 18.0049C18.2808 17.809 18.3861 17.5434 18.3861 17.2664V15.1776C18.3863 15.0404 18.3605 14.9046 18.3102 14.7778C18.2599 14.6511 18.1862 14.536 18.0931 14.4392L16.3861 12.6564ZM16.3861 16.222H2.38611V15.61L4.09311 13.8272C4.18615 13.7304 4.25994 13.6153 4.31023 13.4886C4.36051 13.3618 4.3863 13.226 4.38611 13.0888V8.91122C4.38611 6.03181 6.62911 3.68923 9.38611 3.68923C12.1431 3.68923 14.3861 6.03181 14.3861 8.91122V13.0888C14.3861 13.3666 14.4911 13.6319 14.6791 13.8272L16.3861 15.61V16.222ZM9.38611 21.444C10.0054 21.4448 10.6096 21.2441 11.1146 20.8697C11.6196 20.4954 12.0004 19.966 12.2041 19.3552H6.56811C6.77177 19.966 7.15259 20.4954 7.65762 20.8697C8.16265 21.2441 8.76681 21.4448 9.38611 21.444Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="w-[30px] h-[30px] bg-[#FFF] rounded-full overflow-hidden cursor-pointer flex justify-center items-center" onClick={() => handleSignOut()}>
                <img className="w-[20px] h-[20px]" src='https://res.cloudinary.com/ddbrxrvat/image/upload/v1712567319/Mokx_App_Images/VectorUser_obqavd.png' alt="usericon" />
              </div>
            </div>
          </div>
          <div>
            <select className='outline-none p-2 rounded-lg bg-white drop-shadow-3Xl' onChange={handleCountryChange}>
              <option value="">All Countries</option>
              {/* Map through unique countries */}
              {Array.from(new Set(data.map(item => item.country))).map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <BarCharts data={filteredData!== null? filteredData: data} />
          <ScatterCharts data={filteredData!== null? filteredData: data} />
          <PieCharts data={filteredData!== null? filteredData: data} />
        </div>
      </div>
    </>
  );
}

export default DataSection;