import React from 'react'

import workimg from '../Asset/es6.jpeg'
import real from '../Asset/es5.jpeg'
import work from '../Asset/es1.jpeg'
import Estate from '../Asset/es2.jpeg'
import img from '../Asset/es3.jpeg'
import esa from '../Asset/es4.jpeg'

const Work = () => {
    return (
        <div name='Work' className='w-full  text-[#a188b0] bg-[#0a192f] py-[130px]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=' pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-[#f3e2fc] border-purple-900'>Work</p>
                    <p className='py-4'> // Check out some of my recent work</p>
                </div>

                {/*=================== container =======================*/}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* =====================grid item========================== */}
                    <div
                        style={{ backgroundImage: `url(${workimg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* =====================hover effect========================== */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold  text-[#f3e2fc] tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-[#a188b0] font-bold text-lg '>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-[#a188b0] font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* =====================grid item========================== */}
                    <div
                        style={{ backgroundImage: `url(${real})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* =====================hover effect========================== */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold  text-[#f3e2fc] tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-[#a188b0] font-bold text-lg '>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-[#a188b0] font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* =====================grid item========================== */}
                    <div
                        style={{ backgroundImage: `url(${work})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* =====================hover effect========================== */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold  text-[#f3e2fc] tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-[#a188b0] font-bold text-lg '>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-[#a188b0] font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* =====================grid item========================== */}
                    <div
                        style={{ backgroundImage: `url(${Estate})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* =====================hover effect========================== */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold  text-[#f3e2fc] tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-[#a188b0] font-bold text-lg '>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-[#a188b0] font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* =====================grid item========================== */}
                    <div
                        style={{ backgroundImage: `url(${img})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* =====================hover effect========================== */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold  text-[#f3e2fc] tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-[#a188b0] font-bold text-lg '>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-[#a188b0] font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* =====================grid item========================== */}
                    <div
                        style={{ backgroundImage: `url(${esa})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* =====================hover effect========================== */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold  text-[#f3e2fc] tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-[#a188b0] font-bold text-lg '>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-[#a188b0] font-bold text-lg '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Work