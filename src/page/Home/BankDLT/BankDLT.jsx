import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import icon1 from '../../../assets/task2/ce7661f2a1eb21b628f685aa4a4daf25.png'
import icon2 from '../../../assets/task2/782dbe4f62b8fc74cbaba9ecbf512f2f.png'
import icon3 from '../../../assets/task2/08e940846a70f466127acffb36e7c904.png'


const BankDLT = () => {
    return (
        <div className=" bg-gradient-to-r from-[#473920] via-[#0B0A1B] to-[#473920] ">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto">
                <div className=" pt-10 pl-10">
                    <h1 className="text-2xl font-bold text-white ">What we do with <br /> Blockchain DLT/ Bank</h1>
                    <p className="mb-3  text-white pt-3">Join a first-growing community of developers and innovators <br /> connected all over the world, building the new era of the <br /> internet.</p>
                    <div className=" flex gap-5 pt-5">
                        <button className="btn"><FaArrowLeft /></button>
                        <button className="btn"><FaArrowRight /></button>
                    </div>

                </div>
                <div className="p-7 md:p-0 lg:p-0  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  md:gap-5 lg:gap-5">
                    {/* div1 */}
                    <div className="pb-7 pl-5 pr-5 rounded-md  bg-[#1F1A2F] shadow-md mt-10 mb-10">
                        <div className="p-5">
                        <img className="w-10" src={icon1} alt="" />
                        </div>
                        <div className="p-3">
                            <h2 className="font-bold text-xl text-white mb-3">Trade Finance</h2>
                            <p className="text-white text-xs">We offer green financing to help sellers, buyers, and financial institutions facilitate trade as well as create an atmosphere for non-conventional players</p>
                        </div>
                    </div>
                    {/* div2 */}
                    <div className="pb-7 rounded-md bg-[#1F1A2F] shadow-md mt-10 mb-10">
                        <div className="p-5">
                        <img className="w-10" src={icon2} alt="" />
                        </div>
                        <div className="p-3">
                            <h2 className="font-bold text-xl text-white mb-3">Trade Finance</h2>
                            <p className="text-white text-xs">We offer green financing to help sellers, buyers, and financial institutions facilitate trade as well as create an atmosphere for non-conventional players</p>
                        </div>
                    </div>
                    {/* div3 */}
                    <div className="pb-7 rounded-md  bg-[#1F1A2F] shadow-md mt-10 mb-10">
                        <div className="p-5">
                        <img className="w-10" src={icon3} alt="" />
                        </div>
                        <div className="p-3">
                            <h2 className="font-bold text-xl text-white mb-3">Trade Finance</h2>
                            <p className="text-white text-xs">We offer green financing to help sellers, buyers, and financial institutions facilitate trade as well as create an atmosphere for non-conventional players</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankDLT;