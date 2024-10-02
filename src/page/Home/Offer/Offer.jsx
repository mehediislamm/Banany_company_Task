import { GoArrowDownRight } from "react-icons/go";
import icon1 from '../../../assets/task3/4df78f9ed71b81f8d1cd1c32c236fe8b.png'
import icon2 from '../../../assets/task3/7e1ebda022a161e6228a57e50898b1c3.png'
import icon3 from '../../../assets/task3/db976214e90a56897f4ceb5427d26fe2.png'

const Offer = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#0F223B] via-[#2C0C1F] to-[#0F3528]  ">
            <h1 className="text-xl font-bold text-center text-white pt-10">What do we Offer</h1>
                <div className="gap-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto">
                    
                    <div className="pb-7 m-7 rounded-md bg-[#463B98] shadow-md mt-10 mb-10">
                        <div className="p-5">
                            <img className="w-10" src={icon1} alt="" />
                        </div>
                        <div className="p-3">
                            <h2 className="font-bold text-xl text-white mb-3">Fund Transfer</h2>
                            <p className="text-white">Fund transfer, also known as remittance, involves moving funds from one place to another. Traditionally, banks have facilitated this process through domestic and international banking networks like SWIFT.

                                In recent years, remittance companies have emerged, offering services under new regulations and using technology such as mobile devices. However, these companies face obstacles as they rely on the traditional banking infrastructure, which restricts their ability to adopt further technological advancements.</p>
                        </div>
                    </div>
                    <div className="p-7 md:p-0 lg:p-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  md:gap-5 lg:gap-5">
                        {/* div1 */}
                        <div className="pb-7 pl-5 pr-5 rounded-md bg-white/10 backdrop-blur-lg shadow-md mt-10 mb-10">
                            <div className="p-5">
                                <img className="w-10" src={icon2} alt="" />
                            </div>
                            <div className="p-3">
                                <h2 className="font-bold text-xl text-white mb-3">Payment System</h2>
                                <div className="text-white text-xl md:pt-20 lg:pt-40 flex justify-end">
                                <span className="bg-white/20 rounded-full p-1"><GoArrowDownRight /></span>
                                   
                                </div>
                            </div>
                        </div>

                        {/* div2 */}
                        {/* div2 */}
                        <div className="pb-7 rounded-md bg-white/10 backdrop-blur-lg shadow-md mt-10 mb-10">
                            <div className="p-5">
                                <img className="w-10" src={icon3} alt="" />
                            </div>
                            <div className="p-3">
                                <h2 className="font-bold text-xl text-white mb-3">Currency Exchange</h2>
                                <div className="md:pt-20  lg:pt-40 flex justify-end text-white text-xl">
                                    <span className="bg-white/20 rounded-full p-1"><GoArrowDownRight /></span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;