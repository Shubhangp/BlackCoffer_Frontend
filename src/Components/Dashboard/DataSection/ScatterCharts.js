import React from 'react';
import { CartesianGrid, Legend, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';

const ScatterCharts = ({data}) => {
  return (
    <div className="flex flex-col bg-[#FFF] rounded-xl drop-shadow-3Xl w-[73.2vw] h-96 px-7 pt-7 pb-5">
        <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
                <CartesianGrid />
                <XAxis dataKey="intensity" />
                <YAxis dataKey="likelihood" />
                <Tooltip />
                <Legend />
                <Scatter name="Intensity with Likelihood" data={data} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
    </div>
  )
}

export default ScatterCharts;
