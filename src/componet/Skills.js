import React from 'react'

import html from '../Asset/html-removebg-preview.png'
import css from '../Asset/css_image-removebg-preview.png'
import js from '../Asset/java.png'
import tailwind from '../Asset/tailwind-removebg-preview.png'
import node from '../Asset/node_js-removebg-preview.png'
import react from '../Asset/react4-removebg-preview.png'

const Skills = () => {
    return (
        <div name='Skill' className='w-full bg-[#0a192f] text-[#a188b0] py-[130px]' >

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 text-[#f3e2fc] border-purple-900'>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={react} alt="REACT JS ICON" />
                        <p className='my-4'>REACT</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={html} alt="HTML ICON" />
                        <p className='my-4'>HTML</p>
                    </div>


                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={css} alt="CSS ICON" />
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={js} alt="JAVASCRIPT ICON" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={node} alt="NODE ICON" />
                        <p className='my-4'>NODE</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="TAILWIND ICON" />
                        <p className='my-4'>TAILWINDCSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills