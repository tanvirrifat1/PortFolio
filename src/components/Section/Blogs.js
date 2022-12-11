import React from 'react';


const Blogs = () => {
    return (
        <div name="blog" className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white">
            <div className='flex justify-center items-center h-full'>
                <p className='text-7xl font-thin'>C</p>
                <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
                <p className='text-7xl font-thin'>ming</p>

                <p className='text-7xl font-thin ml-4'>S</p>
                <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
                <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
                <p className='text-7xl font-thin'>n....</p>
            </div>
        </div>
    );
};

export default Blogs;