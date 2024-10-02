 import bgImage from '../../../assets/Frame 132.png'
import { FaArrowDownLong } from 'react-icons/fa6';
import { BsMouse } from 'react-icons/bs';

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${bgImage})`,

                }}>
                <div className=" "></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-screen-md">
                        <p>Unified Product, Simplified Transection</p>
                        <h1 className="mb-5 text-5xl font-bold">Free your Money with digital Blockchain / DHL Bank</h1>
                        <p className="mb-5">
                            DIGI-KOEIN is a cryptocurrency, It’s developed by Green Sked, led by financial experts, to transform the financial industry and enhance people's lives using Blockchain technology.
                        </p>
                        <button className="btn bg-[#EBB029]">Learn more</button>
                        <div className='flex justify-center mt-20  '>
                            <BsMouse className='text-white text-4xl' />
                        </div>
                        <p className='pt-4 pb-4 '>Scroll Down</p>
                        <div className='flex justify-center '>
                            <FaArrowDownLong className='text-2xl'/>
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;