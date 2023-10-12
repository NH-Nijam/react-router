import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';

const Accordions = () => {
    return (
        <div className='lg:w-4/5 w-11/12 mx-auto lg:my-16 my-10'>
            <div className='lg:w-3/5 w-11/12 text-center mx-auto '>
                <h1 className='lg:text-[40px] text-3xl font-extrabold mb-6 text-ellipsis'>Frequently Asked Any Questions</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className='md:mt-16 mt-10 lg:flex gap-8'>
                <div className='lg:w-1/2 lg:flex lg:flex-col gap-8 lg:h-[400px]'>
                    <div className="collapse collapse-plus bg-base-200 rounded-lg">
                    <input type="radio" name="my-accordion-2" checked="checked" /> 
                    <div className="collapse-title text-xl font-medium ">
                        1. Are application fee waivers available?
                    </div>
                    <div className="collapse-content "> 
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, . </p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus  bg-base-200 rounded-lg">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium border-lg">
                        2. Are application fee waivers available?
                    </div>
                    <div className="collapse-content"> 
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, . </p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 rounded-lg">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium">
                        3. Are application fee waivers available?
                    </div>
                    <div className="collapse-content"> 
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, . </p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 rounded-lg">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium">
                        4. Are application fee waivers available?
                    </div>
                    <div className="collapse-content"> 
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, . </p>
                    </div>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:h-[400px] mt-10 lg:mt-0 '>
                    <img className='w-full lg:h-[400px]' src="src/homePageImages/Frebg.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Accordions;