import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const BarCharts = ({data}) => {

  return (
    <div className="flex flex-col bg-[#FFF] rounded-xl drop-shadow-3Xl w-[73.2vw] h-96 px-7 pt-7 pb-5">
      <div className="flex justify-end items-center">
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] bg-[#8884d8] rounded-full"></div>
          <span className="text-[#000] text-sm font-lato font-normal">
            Relevance with End Year
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height='100%'>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="end_year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="relevance" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarCharts;