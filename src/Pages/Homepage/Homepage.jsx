import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import Newsletter from "../../Components/Newsletter/Newsletter";


const Homepage = () => {
    return (
        <div >
           <Banner></Banner>
           <AboutUs></AboutUs>
           <Category></Category>
           <Newsletter></Newsletter>
        </div>
    );
};

export default Homepage;