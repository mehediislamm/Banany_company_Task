import bggImagee from '../../../assets/quan.png'
const Digikoein = () => {
    return (
        <div>
            <div
                className=" h-full bg-cover bg-center   "
                style={{ backgroundImage: `url(${bggImagee})` }}
            >
                <div className='bg-black opacity-60'>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  max-w-screen-xl mx-auto'>
                        <div>

                        </div>
                        <div className='p-10 text-white '>
                            <h1 className='text-2xl font-bold pb-5 pt-10 '>What is Digikoein ?</h1>
                            <p className='pb-10'>
                                DIGI KOEIN is created and developed by a group of the financial experts under the company of Green Shark Limited to prompt a technological innovation and to positively alter the financial industry practice and the life of people. The ways to use “Money” are below observed and divided into three categories:
                                1) Fund Transfer; 2) Payment and 3) Currency Exchanges.
                                <br />
                                However, the industry practice currently adopted, to some extent, hinders a full-fledged technological and economic growth in terms of the usage of Money. The global and independent platform created through DIGI KOEIN Blockchain/Distributed Ledger Technology shall get the divided ways of “Money” usage bundled and integrated to remove the current intermediaries, and to offer the alternative solutions.
                                <br />
                                The technology shall ultimately expand its horizon to be used in a variety of financial services including credits and loans, trade finance, and others. At this stage, it is certain that the market recognition and brand name of DIGI KOEIN will be explosively heightened.
                            </p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Digikoein;