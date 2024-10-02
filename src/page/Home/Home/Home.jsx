import BankDLT from "../BankDLT/BankDLT";
import Banner from "../Banner/Banner";
import Digikoein from "../Digikoein/Digikoein";
import Offer from "../Offer/Offer";

 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BankDLT></BankDLT>
            <Digikoein></Digikoein>
            <Offer></Offer>
        </div>
    );
};

export default Home;