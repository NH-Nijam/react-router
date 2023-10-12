import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from '@ramonak/react-progress-bar';

const Home = () => {
    const percentage = 95;
    const percentage1 =80;
    const percentage2 =70;
    const percentage3 =90;
    const bg1 ='red'
    return (
        <div className=' bg-white text-black'>
            <main>
                <section className='w-4/5 mx-auto gap-5 flex md:items-center flex-col-reverse md:flex-row h-screen'>
                    <div className='flex flex-col  justify-center lg:w-1/2'>
                        <h4 className='text-[32px]  font-light'>Hello,I’m</h4>
                        <h1 className='text-[43px] font-bold'>MD: Nijam Hossen</h1>
                        <h3 className='text-[32px] font-ligh'>I am a <span className='text-orange-600 font-bold '> <Typewriter 
                        words={["Developer", 'React-Developer','Font-End-Developer']}
                        loop={""}
                        delaySpeed={1000}
                        typeSpeed={200}
                         />
                         </span>
                         </h3>
                         <div className='flex gap-2 md:mt-4 -mt-20'>
                            <div className='bg-[#1A68F9;] w-11 h-11 rounded-md flex md:justify-center md:items-center'>                              
                                <img src="src/homePageImages/icon1.png" alt="" />
                            </div>                          
                            <div className='bg-[#E24062;] w-11 h-11 rounded-md flex justify-center items-center'>                              
                                <img src="src/homePageImages/icon2.png" alt="" />
                            </div>                          
                            <div className='bg-[#297EB7;] w-11 h-11 rounded-md flex justify-center items-center'>                              
                                <img src="src/homePageImages/icon3.png" alt="" />
                            </div>                          
                            <div className='bg-[#3A5996;] w-11 h-11 rounded-md flex justify-center items-center'>                              
                                <img src="src/homePageImages/icon4.png" alt="" />
                            </div>                          
                            <div className='bg-[#36668A;] w-11 h-11 rounded-md flex justify-center items-center'>                              
                                <img src="src/homePageImages/icon5.png" alt="" />
                            </div>                          
                            <div className='bg-[#53AFEE;] w-11 h-11 rounded-md flex justify-center items-center'>                              
                                <img src="src/homePageImages/icon6.png" alt="" />
                            </div>                          
                         </div>
                         <div className='flex gap-3 mt-11'>
                            <button className='text-base font-medium bg-[#2B2B2D] md:px-12 px-8 md:py-3 py-2 md:rounded-[39px] rounded-3xl text-white'>HIRE ME</button>
                            <button className='text-base font-medium border border-black text-black md:px-12 px-8 md:py-3 py-2 rounded-[39px]'>SEE MY RESUME</button>
                         </div>
                    </div>

                    <div className='w-1/2 relative '>
                        <img className='w-full h-full' src="src/homePageImages/background.png" alt="" />
                        <img className='absolute bottom-1 w-[80%] right-[5%]' src="src/homePageImages/parson.png" alt="" />     
                    </div>
                </section>

                <section className='w-4/5  mx-auto flex gap-7'>
                        <div className='w-1/2'>
                            <div className='w-4/6 flex flex-col gap-1'>
                                <h2 className='text-3xl font-bold  '>Professional Skills Works</h2>
                                <p className='text-xs font-bold text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                           <div className='flex mt-12 gap-8'>
                                <div className='w-24'>
                                    <CircularProgressbar value={percentage}  text={`${percentage}%`}
                                     styles={{    
                                        path: {
                                          // Path color
                                          stroke: `rgba(80, 87, 128, ${percentage / 1})`,
                                          
                                        },
                                        
                                        trail: {
                                            // Path Background-color 
                                          stroke: '#ffff',
                                        },
                                        text: {
                                            // text-color 
                                          fill: 'black',
                                          fontWeight:'bold',
                                          fontSize: '16px',
                                        }, 
                                      }}                                 
                                    />
                                    <h3 className='text-xs font-bold  mt-6'>Development</h3>
                                </div>  
                                <div className='w-24'>
                                    <CircularProgressbar value={percentage1}  text={`${percentage1}%`}
                                    styles={{    
                                        path: {
                                          // Path color
                                          stroke: `rgba(80, 87, 128, ${percentage1 / 1})`,
                                          
                                        },
                                        
                                        trail: {
                                            // Path Background-color 
                                          stroke: '#ffff',
                                        },
                                        text: {
                                            // text-color 
                                          fill: 'black',
                                          fontWeight:'bold',
                                          fontSize: '16px',
                                          
                                        }, 
                                      }}
                                    />
                                    <h3 className='text-xs font-bold  mt-6'>Development</h3>
                                </div>            
                                <div className='w-24'>
                                    <CircularProgressbar value={percentage2}  text={`${percentage2}%`}
                                    styles={{    
                                        path: {
                                          // Path color
                                          stroke: `rgba(80, 87, 128, ${percentage2 / 1})`,
                                          
                                        },
                                        
                                        trail: {
                                            // Path Background-color 
                                          stroke: '#ffff',
                                        },
                                        text: {
                                            // text-color 
                                          fill: 'black',
                                          fontWeight:'bold',
                                          fontSize: '16px',
                                          
                                        }, 
                                      }}
                                    />
                                    <h3 className='text-xs font-bold mt-6'>Development</h3>
                                </div>            
                                <div className='w-24'>
                                    <CircularProgressbar value={percentage3}  text={`${percentage3}%`}
                                    styles={{    
                                        path: {
                                          // Path color
                                          stroke: `rgba(80, 87, 128, ${percentage3 / 1})`,
                                          
                                        },
                                        
                                        trail: {
                                            // Path Background-color 
                                          stroke: '#ffff',
                                        },
                                        text: {
                                            // text-color 
                                          fill: 'black',
                                          fontWeight:'bold',
                                          fontSize: '16px',
                                          
                                        }, 
                                      }}
                                    />
                                    <h3 className='text-xs font-bold  mt-6'>Development</h3>
                                </div>            
                           </div>
                            <p className='my-7 text-xs font-bold uppercase leading-6 text-[ #3C3C3C]'>gLorem Ipsum is simply dummy text of the printing and typesett ing industry. Lorem IpsumLorem Ipsum is simply dummy text ofprinting and typesetting industry.Lorem Ipsum industry.  </p>
                            <h3 className='text-lg font-bold'>working skills</h3>
                            <div className='mt-12'>
                                <div className='grid grid-cols-2 gap-6'>
                                    <ProgressBar completed={95} bgColor='#F00000' height='15px' borderRadius='5px' maxCompleted={100} />
                                    <ProgressBar completed={80} bgColor='#F00000' height='15px' borderRadius='5px' maxCompleted={100} />
                                </div>
                                <div className='grid grid-cols-2 gap-6 mt-12'>
                                    <ProgressBar completed={95} bgColor='#F00000' height='15px' borderRadius='5px' maxCompleted={100} />
                                    <ProgressBar completed={80} bgColor='#F00000' height='15px' borderRadius='5px' maxCompleted={100} />
                                </div>
                              
                            </div>
                        </div>

                        <div className='w-1/2 flex flex-col justify-end items-center' >
                            <h2 className='text-3xl font-bold text-center mb-3'>Working time shorts</h2>
                            <div className='grid grid-cols-2 gap-3'>
                                <img src="src/homePageImages/work.png" alt="" />
                                <img src="src/homePageImages/work2.png" alt="" />
                                <img src="src/homePageImages/work3.png" alt="" />
                                <img src="src/homePageImages/work4.png" alt="" />
                            </div>
                        </div>
                        
                </section>

                <section className='bg-[#505780] h-44 my-36 flex justify-center items-center'>
                    <div className='w-4/5 mx-auto flex text-white '>
                            <div className='w-1/2'>
                                <h2 className='text-lg font-bold mb-3'>Get a Free  Counsulation</h2>
                                <p className='text-xs font-bold uppercase leading-6 text-[ #3C3C3C]'>gLorem Ipsum is simply dummy text of the printing and typesett ing industry. Lorem IpsumLorem Ipsum is simply dummy text ofprinting and typesetting industry.</p>
                            </div>
                            <div className='w-1/2 flex justify-end items-center'> 
                                <div className=' w-3/4 bg-white flex justify-end rounded-[180px]'>
                                    <button className='bg-black py-4 px-7 rounded-[180px]'>Try for free</button>   
                                </div>                                     
                                                                      
                            </div>
                    </div>
                </section>
                
                <section className='w-4/5 mx-auto'>
                    <h1 className='text-5xl font-semibold  text-center mb-12'>My products</h1>
                    <div className='grid grid-cols-3 gap-6'>
                        <div className='shadow-lg shadow-gray-400'>
                            <img src="src/homePageImages/product1.png" alt="" />
                            <div className='flex justify-between items-end p-4 rounded-xl'>
                                <div>
                                    <h6 className='text-xs font-normal mb-1'>CATEGORY</h6>
                                    <h3 className='text-lg font-bold'>PROJECT TITLE</h3>
                                </div>
                                <h3 className='text-lg font-bold'>2018</h3>
                            </div>
                        </div>
                        <div className='shadow-lg shadow-gray-400'>
                            <img src="src/homePageImages/product2.png" alt="" />
                            <div className='flex justify-between items-end p-4 rounded-xl'>
                                <div>
                                    <h6 className='text-xs font-normal mb-1'>CATEGORY</h6>
                                    <h3 className='text-lg font-bold'>PROJECT TITLE</h3>
                                </div>
                                <h3 className='text-lg font-bold'>2018</h3>
                            </div>
                        </div>
                        <div className='shadow-lg shadow-gray-400'>
                            <img src="src/homePageImages/product3.png" alt="" />
                            <div className='flex justify-between items-end p-4 rounded-xl'>
                                <div>
                                    <h6 className='text-xs font-normal mb-1'>CATEGORY</h6>
                                    <h3 className='text-lg font-bold'>PROJECT TITLE</h3>
                                </div>
                                <h3 className='text-lg font-bold'>2018</h3>
                            </div>
                        </div>
                        <div className='shadow-lg shadow-gray-400'>
                            <img src="src/homePageImages/product4.png" alt="" />
                            <div className='flex justify-between items-end p-4 rounded-xl'>
                                <div>
                                    <h6 className='text-xs font-normal mb-1'>CATEGORY</h6>
                                    <h3 className='text-lg font-bold'>PROJECT TITLE</h3>
                                </div>
                                <h3 className='text-lg font-bold'>2018</h3>
                            </div>
                        </div>
                        <div className='shadow-lg shadow-gray-400'>
                            <img src="src/homePageImages/product5.png" alt="" />
                            <div className='flex justify-between items-end p-4 rounded-xl'>
                                <div>
                                    <h6 className='text-xs font-normal mb-1'>CATEGORY</h6>
                                    <h3 className='text-lg font-bold'>PROJECT TITLE</h3>
                                </div>
                                <h3 className='text-lg font-bold'>2018</h3>
                            </div>
                        </div>
                        <div className='shadow-lg shadow-gray-400'>
                            <img src="src/homePageImages/product6.png" alt="" />
                            <div className='flex justify-between items-end p-4 rounded-xl'>
                                <div>
                                    <h6 className='text-xs font-normal mb-1'>CATEGORY</h6>
                                    <h3 className='text-lg font-bold'>PROJECT TITLE</h3>
                                </div>
                                <h3 className='text-lg font-bold'>2018</h3>
                            </div>
                        </div>
                        <div className='shadow-lg shadow-gray-400'>
                            <img src="src/homePageImages/product7.png" alt="" />
                            <div className='flex justify-between items-end p-4 rounded-xl'>
                                <div>
                                    <h6 className='text-xs font-normal mb-1'>CATEGORY</h6>
                                    <h3 className='text-lg font-bold'>PROJECT TITLE</h3>
                                </div>
                                <h3 className='text-lg font-bold'>2018</h3>
                            </div>
                        </div>
                        <div className='shadow-lg shadow-gray-400'>
                            <img src="src/homePageImages/product8.png" alt="" />
                            <div className='flex justify-between items-end p-4 rounded-xl'>
                                <div>
                                    <h6 className='text-xs font-normal mb-1'>CATEGORY</h6>
                                    <h3 className='text-lg font-bold'>PROJECT TITLE</h3>
                                </div>
                                <h3 className='text-lg font-bold'>2018</h3>
                            </div>
                        </div>
                        <div className='shadow-xl shadow-gray-600'>
                            <img src="src/homePageImages/product9.png" alt="" />
                            <div className='flex justify-between items-end p-4 rounded-xl'>
                                <div>
                                    <h6 className='text-xs font-normal mb-1'>CATEGORY</h6>
                                    <h3 className='text-lg font-bold'>PROJECT TITLE</h3>
                                </div>
                                <h3 className='text-lg font-bold'>2018</h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-12'>
                        <button className='px-6 py-3 text-base font-bold border border-black rounded-[39px]'>LOAD MORE WORK</button>
                    </div>
                </section>
                <section className='w-4/5 mx-auto my-36 flex gap-40 text-[Manrope]'>
                    <div className='w-1/2'>
                        <img className='rounded-3xl' src="src/homePageImages/parson3.png" alt="" />
                    </div>
                    <div className='w-1/2'>                       
                        <h1 className='text-[54px] font-bold '>ABOUT ME</h1>
                        <h1 className='text-[400%] font-bold text-gray-300 leading-none mb-3'>WHO I AM</h1>
                        <p className=' text-xs font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiamturpis molestie, dictum est a, mattis tellus. 
                        m, metus nec fringilla accumsan, risus sem sollic
                        itudin Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. <br /><br />

                        dictum est a, mattis tellus. Sed dignissim, metus nec fr
                        ingilla accumsan, risus sem sollicitudinLorem i
                        psum dolor sit amet, consectetur adipiscing el
                        it. Etiam eu turpis molestie, dictum
                        , mattis tellus. Sed dignissim, <br/><br />

                        metus nec fringilla accumsan, risus sem sollicitudinL
                        orem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                        <div className='flex gap-3 mt-11'>
                        <button className='text-base font-medium bg-[#2B2B2D] px-12 py-3 rounded-[39px] text-white'>HIRE ME</button>
                        <button className='text-base font-medium border border-black text-black px-12 py-3 rounded-[39px]'>SEE MY RESUME</button>
                        </div>                       
                    </div>
                </section>

                <section className='w-4/5 mx-auto my-36 flex gap-6'>
                    <div className='w-2/5'>
                        <h1 className='text-5xl font-bold'>How my design process </h1>
                        <p className='text-xs font-semibold mt-4'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                    <div className='4/5 grid lg:grid-cols-3 md:grid-cols-2 gap-12'>
                        <div className='p-6 shadow-xl'>
                              <div className='flex gap-2'>
                                <div className='bg-black rounded-full w-11 h-9 flex'>
                                    <img className=' rounded-full p-2' src="src/homePageImages/Group.png " alt="" />
                                </div>
                                <h2 className='text-2xl font-medium'>Project Breef</h2>
                              </div>
                              <p className='text-xs font-normal mt-6  leading-5'>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit. Etiam </p>
                        </div>
                        <div className='p-6 shadow-xl'>
                              <div className='flex gap-2'>
                                <div className='bg-black rounded-full w-11 h-9 flex'>
                                    <img className=' rounded-full p-2' src="src/homePageImages/Group1.png " alt="" />
                                </div>
                                <h2 className='text-2xl font-medium'>Project Breef</h2>
                              </div>
                              <p className='text-xs font-normal mt-6  leading-5'>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit. Etiam </p>
                        </div>
                        <div className='p-6 shadow-xl'>
                              <div className='flex gap-2'>
                                <div className='bg-black rounded-full w-11 h-9 flex'>
                                    <img className=' rounded-full p-2' src="src/homePageImages/Group2.png " alt="" />
                                </div>
                                <h2 className='text-2xl font-medium'>Project Breef</h2>
                              </div>
                              <p className='text-xs font-normal mt-6  leading-5'>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit. Etiam </p>
                        </div>
                    </div>
                </section>

                <section className='w-4/5 mx-auto my-36 flex gap-40 text-[Manrope]'>
                    <div className='w-1/2'>
                        <img className='rounded-3xl' src="src/homePageImages/parson4.png" alt="" />
                    </div>
                    <div className='w-1/2'>                       
                        <h1 className='text-[54px] font-bold '>Visit My <br /> Youtube Channel</h1>
                       
                        <p className=' text-base font-normal w-[50%] my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p >
                        <div className='flex gap-3 mt-11'>
                        <button className='text-base font-medium bg-[#2B2B2D] px-12 py-3 rounded-[39px] text-white'>Subscribe</button>
                        </div>                       
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;