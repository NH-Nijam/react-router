import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const CarouselSection = () => {
    return (
        <div className='lg:w-4/5 w-11/12 mx-auto lg:my-16 my-10'>
            <div className='lg:w-3/5 w-11/12 text-center mx-auto '>
                <h1 className='lg:text-[40px] text-3xl font-extrabold mb-6 text-ellipsis'>What Our Client Say</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className='md:mt-16 mt-10 relative w-full lg:h-[500px] md:h-[350px] h-[250px]'>    
                <img className='absolute w-full lg:h-[500px] md:h-[350px] h-[250px]' src="src/homePageImages/crbg.png" alt="" />
                <div className='bg-black  bg-opacity-75 text-white relative w-full lg:h-[500px] md:h-[350px] h-[250px]'>
                    <Carousel className='md:w-11/12 mx-auto '>
                        <div className='lg:h-[500px] md:h-[350px] h-[250px] flex flex-col justify-center items-center w-10/12 mx-auto '>
                                <div className='lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] md:mb-6 mb-2 '>
                                    <img className='rounded-full' src="src/homePageImages/cricon.png" />
                                </div>
                                <h2 className='text-2xl font-extrabold '>Awlad Hossain</h2>
                                <h5 className='text-base font-normal'>UIX Designer</h5>
                                <p className='lg:mt-8 md:mt-5 mt-3 md:text-base  md:font-normal'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Mclintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
                        </div>                                               
                        <div className='lg:h-[500px] md:h-[350px] h-[250px] flex flex-col justify-center items-center w-10/12 mx-auto'>
                                <div className='lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] md:mb-6 mb-2'>
                                    <img className='rounded-full' src="src/homePageImages/cricon.png" />
                                </div>
                                <h2 className='text-2xl font-extrabold '>Awlad Hossain</h2>
                                <h5 className='text-base font-normal'>UIX Designer</h5>
                                <p className='lg:mt-8 md:mt-5 mt-3 md:text-base md:font-normal'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Mclintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
                        </div>                                               
                        <div className='lg:h-[500px] md:h-[350px] h-[250px] flex flex-col justify-center items-center w-10/12 mx-auto'>
                                <div className='lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] md:mb-6 mb-2'>
                                    <img className='rounded-full' src="src/homePageImages/cricon.png" />
                                </div>
                                <h2 className='text-2xl font-extrabold '>Awlad Hossain</h2>
                                <h5 className='text-base font-normal'>UIX Designer</h5>
                                <p className='lg:mt-8 md:mt-5 mt-3 md:text-base md:font-normal'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Mclintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
                        </div>                                               
                        <div className='lg:h-[500px] md:h-[350px] h-[250px] flex flex-col justify-center items-center w-10/12 mx-auto'>
                                <div className='lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] md:mb-6 mb-2'>
                                    <img className='rounded-full' src="src/homePageImages/cricon.png" />
                                </div>
                                <h2 className='text-2xl font-extrabold '>Awlad Hossain</h2>
                                <h5 className='text-base font-normal'>UIX Designer</h5>
                                <p className='lg:mt-8 md:mt-5 mt-3 md:text-base md:font-normal'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Mclintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
                        </div>                                               
                    </Carousel>
                </div>
           </div>
        </div>
    );
};

export default CarouselSection;