import React from 'react';

const DataCard = ({data}) => {
    return (
        <a href={data.url} key={data._id} className="relative lg:w-[48%] md:w-[48%] w-[100%] bg-[#FFF] rounded-xl drop-shadow-3Xl py-7 pr-9 pl-10 mb-4 flex flex-col justify-center gap-4">
            <div className='flex items-center gap-5'>
                <h1 className='text-[#000] text-2xl font-figtree font-semibold'>{data.sector !== ""? data.sector : "Sector not listed"}</h1>
            </div>
            <div>
                <span className='font-medium'>Start Year:</span> {data.start_year}
            </div>
            <div>
                <span className='font-medium'>End Year:</span> {data.end_year}
            </div>
            <div>
                <span className='font-medium'>Topic:</span> {data.topic}
            </div>
            <div>
                <span className='font-medium'>Region:</span> {data.region}
            </div>
            <div>
                <span className='font-medium'>Source:</span> {data.source}
            </div>
            <div>
                <span className='font-medium'>Country:</span> {data.country}
            </div>
            <div>
                <span className='font-medium'>Insight:</span> {data.insight}
            </div>
        </a>
    )
}

export default DataCard;