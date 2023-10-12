import React from 'react';

const Contact = () => {
    return (
        <div className='lg:w-4/5 w-11/12 mx-auto lg:my-16 my-10'>
            <div className='lg:w-3/5 w-11/12 text-center mx-auto '>
                <h1 className='lg:text-[40px] text-3xl font-extrabold mb-6 text-ellipsis'>Frequently Asked Any Questions</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className='md:mt-16 mt-10 lg:flex gap-8'>
                <div className='lg:w-1/2 lg:flex lg:flex-col gap-8 '>
                    <div className='grid md:grid-cols-2  '>
                        <div className='bg-[#F3F3F3] text-center flex flex-col items-center justify-center py-16 px-14 md:border-r md:border-b rounded-lg md:rounded-none'>
                            <img className='w-[40px] h-[40px] ' src="src/homePageImages/icon11.png" alt="" />
                            <h3 className='text-2xl font-extrabold my-4'>Address</h3>
                            <p className='text-base font-normal text-[#707070]'>A108 Adam Street,</p>
                            <p className='text-base font-normal text-[#707070]'>New York, NY 535022</p>
                        </div>
                        <div className='bg-[#F3F3F3] text-center flex flex-col items-center py-16 px-14 md:border-b'>
                            <img className='w-[40px] h-[40px] ' src="src/homePageImages/icon12.png" alt="" />
                            <h3 className='text-2xl font-extrabold my-4'>Call Us</h3>
                            <p className='text-base font-normal text-[#707070]'>+88 01750 00 00 00</p>
                            <p className='text-base font-normal text-[#707070]'>+88 01750 00 00 00</p>
                        </div>
                        <div className='bg-[#F3F3F3] text-center flex flex-col items-center py-16 px-14  md:border-r'>
                            <img className='w-[40px] h-[40px] ' src="src/homePageImages/icon13.png" alt="" />
                            <h3 className='text-2xl font-extrabold my-4'>Email Us</h3>
                            <p className='text-base font-normal text-[#707070]'>info@gmail.com</p>
                            <p className='text-base font-normal text-[#707070]'>info@gmail.com</p>
                        </div>
                        <div className='bg-[#F3F3F3] text-center flex flex-col items-center py-16 px-14 '>
                            <img className='w-[40px] h-[40px] ' src="src/homePageImages/icon14.png" alt="" />
                            <h3 className='text-2xl font-extrabold my-4'>Working Hours</h3>
                            <p className='text-base font-normal text-[#707070]'>Mon-Fri: 9AM to 5PM</p>
                            <p className='text-base font-normal text-[#707070]'>Sunday: 9AM to 1 PM</p>
                        </div>
                    </div>                  
                </div>
                <div className='lg:w-1/2 mt-10 lg:mt-0 '>
                    <form className='flex flex-col gap-7'>
                        <div className='p-6 bg-[#F3F3F3] text-[#707070] rounded-lg text-base font-normal'>
                            <input className='bg-[#F3F3F3] w-full border-none' type="text " placeholder='Your Name'/>
                        </div>
                        <div className='p-6 bg-[#F3F3F3] text-[#707070] rounded-lg text-base font-normal'>
                            <input className='bg-[#F3F3F3] w-full border-none' type="gmail " placeholder='Your Email'/>
                        </div>
                        <div className='p-6 bg-[#F3F3F3] text-[#707070] rounded-lg text-base font-normal'>
                            <input className='bg-[#F3F3F3] w-full border-none' type="text " placeholder='Subject'/>
                        </div>
                        <div className='p-6 bg-[#F3F3F3] text-[#707070] rounded-lg text-base font-normal'>
                            <textarea className='bg-[#F3F3F3]'  id="" cols="65" rows="9" placeholder='Your Message'></textarea>
                        </div>
                        <div>
                            <button className='bg-[#B68C5A] text-xl font-normal py-5 w-full text-center rounded-xl text-white '>Send Message</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;