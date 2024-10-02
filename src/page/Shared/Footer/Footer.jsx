import icon from '../../../assets/Group 1.png'
const Footer = () => {
    return (
        <div className='bg-[#02041B]'>
            <footer className="footer  max-w-screen-xl mx-auto text-base-content p-10">
                <aside className='text-white'>
                    <img className='w-28' src={icon} alt="" />
                    <p>
                        ADIGI KOEIN is embarking on a groundbreaking initiative to <br /> revolutionize the remittance and payment services sector by <br /> harnessing the power of blockchain technology.
                    </p>
                    <h1>DIGIKOEIN 2023 ©</h1>
                </aside>
                <nav className='text-white'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Trademarks</a>
                    
                </nav>
                <nav className='text-white'>
                    <h6 className="footer-title">Sitemap</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">What is Digikoein?</a>
                    <a className="link link-hover">What is DLT for Future Bank</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Terms & Conditions</a>
                </nav>
                <nav className='text-white'>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Litepaper</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Github</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;