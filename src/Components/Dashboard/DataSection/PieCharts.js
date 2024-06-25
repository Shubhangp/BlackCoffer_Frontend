import React from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const PieCharts = ({data}) => {

    return (
        <div className="flex flex-col lg:w-[48%] md:w-[48%] w-[100%] bg-[#FFF] rounded-xl drop-shadow-3Xl py-7 px-9 mb-4">
            <div className="flex justify-end items-center">
                <div className="flex items-center gap-2">
                    <div className="w-[10px] h-[10px] bg-[#8884d8] rounded-full"></div>
                    <span className="text-[#000] text-sm font-lato font-normal">
                        Relevance with Topic
                    </span>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={data} dataKey="relevance" nameKey="topic" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PieCharts
