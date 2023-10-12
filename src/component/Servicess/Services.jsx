
import React from 'react';
import { useState } from 'react';
import CarouselSection from './CarouselSection';
import Accordions from './Accordions';
import Contact from './Contact';
const Services = () => {
    const [save, setSave] =useState("")
    return (
        <main>
            <section className='lg:w-4/5 w-11/12  mx-auto lg:mt-16 mt-5'>
                <div className='lg:w-3/5 w-11/12 text-center mx-auto '>
                    <h1 className='lg:text-[40px] text-3xl font-extrabold mb-6'>The Legal Practice Area</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                </div>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 md:my-16 my-10'>
                    <div onClick={()=>setSave('business')} id='bgcolor' className={`flex flex-col  items-center text-center lg:p-[71px] md:p-[60px] p-7 lg:border-b rounded-lg lg:rounded-none hover:bg-gradient-to-b from-zinc-100 hover: to-zinc-100 hover:shadow-xl duration-300 ${save =='business' ? 'bg-gradient-to-b from-zinc-100 hover: to-zinc-100':''}`}>
                        <img className='w-[70px] h-[70px]' src="src/homePageImages/g1.png" alt="" />
                        <h2 className='text-[32px] lg:my-6 md:my-4 my-2  '>Business Law</h2>
                        <p className='text-[#707070] text-base font-normal lg:mb-8 md:mb-5 mb-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        <img className='rounded-full hover:bg-blue-600' src="src/homePageImages/icon10.png" alt="" />
                    </div>
                    <div onClick={()=>setSave('business1')} id='bgcolor' className={`flex flex-col  items-center text-center lg:p-[71px] md:p-[60px] p-7 lg:border-b lg:border-x rounded-lg lg:rounded-none hover:bg-gradient-to-b from-zinc-100 hover: to-zinc-100 hover:shadow-xl duration-300 ${save =='business1' ? 'bg-gradient-to-b from-zinc-100 hover: to-zinc-100':''}`}>
                        <img className='w-[70px] h-[70px]' src="src/homePageImages/g2.png" alt="" />
                        <h2 className='text-[32px] lg:my-6 md:my-4 my-2  '>Criminal Law</h2>
                        <p className='text-[#707070] text-base font-normal lg:mb-8 md:mb-5 mb-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        <img className='rounded-full hover:bg-blue-600' src="src/homePageImages/icon10.png" alt="" />
                    </div>
                    <div onClick={()=>setSave('business2')} id='bgcolor' className={`flex flex-col  items-center text-center lg:p-[71px] md:p-[60px] p-7 lg:border-b rounded-lg lg:rounded-none hover:bg-gradient-to-b from-zinc-100 hover: to-zinc-100 hover:shadow-xl duration-300 ${save =='business2' ? 'bg-gradient-to-b from-zinc-100 hover: to-zinc-100':''}`}>
                        <img className='w-[70px] h-[70px]' src="src/homePageImages/g3.png" alt="" />
                        <h2 className='text-[32px] lg:my-6 md:my-4 my-2  '>Child Support</h2>
                        <p className='text-[#707070] text-base font-normal lg:mb-8 md:mb-5 mb-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        <img className='rounded-full hover:bg-blue-600' src="src/homePageImages/icon10.png" alt="" />
                    </div>
                    <div onClick={()=>setSave('business3')} id='bgcolor' className={`flex flex-col  items-center text-center lg:p-[71px] md:p-[60px] p-7  rounded-lg lg:rounded-none hover:bg-gradient-to-b from-zinc-100 hover: to-zinc-100 hover:shadow-xl duration-300 ${save =='business3' ? 'bg-gradient-to-b from-zinc-100 hover: to-zinc-100':''}`}>
                        <img className='w-[70px] h-[70px]' src="src/homePageImages/g4.png" alt="" />
                        <h2 className='text-[32px] lg:my-6 md:my-4 my-2  '>Education Law</h2>
                        <p className='text-[#707070] text-base font-normal lg:mb-8 md:mb-5 mb-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        <img className='rounded-full hover:bg-blue-600' src="src/homePageImages/icon10.png" alt="" />
                    </div>
                    <div onClick={()=>setSave('business4')} id='bgcolor' className={`flex flex-col  items-center text-center lg:p-[71px] md:p-[60px] p-7  lg:border-x rounded-lg lg:rounded-none hover:bg-gradient-to-b from-zinc-100 hover: to-zinc-100 hover:shadow-xl duration-300 ${save =='business4' ? 'bg-gradient-to-b from-zinc-100 hover: to-zinc-100':''}`}>
                        <img className='w-[70px] h-[70px]' src="src/homePageImages/g5.png" alt="" />
                        <h2 className='text-[32px] lg:my-6 md:my-4 my-2  '>Divorce Law</h2>
                        <p className='text-[#707070] text-base font-normal lg:mb-8 md:mb-5 mb-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        <img className='rounded-full hover:bg-blue-600' src="src/homePageImages/icon10.png" alt="" />
                    </div>
                    <div onClick={()=>setSave('business5')} id='bgcolor' className={`flex flex-col  items-center text-center lg:p-[71px] md:p-[60px] p-7  rounded-lg lg:rounded-none hover:bg-gradient-to-b from-zinc-100 hover: to-zinc-100 hover:shadow-xl duration-300 ${save =='business5' ? 'bg-gradient-to-b from-zinc-100 hover: to-zinc-100':''}`}>
                        <img className='w-[70px] h-[70px]' src="src/homePageImages/g6.png" alt="" />
                        <h2 className='text-[32px] lg:my-6 md:my-4 my-2  '>Tax Law</h2>
                        <p className='text-[#707070] text-base font-normal lg:mb-8 md:mb-5 mb-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        <img className='rounded-full hover:bg-blue-600' src="src/homePageImages/icon10.png" alt="" />
                    </div>
                </div>
            </section>
            <section >
                <CarouselSection/>
            </section>
            <section>
                <Accordions/>
            </section>
            <section>
                <Contact/>
            </section>
        </main>
        
    );
};

export default Services;