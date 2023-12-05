import { Helmet } from "react-helmet-async";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import Newsletter from "../../Components/Newsletter/Newsletter";


const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>Waark | Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Category></Category>
            <Newsletter></Newsletter>
        </>
    );
};

export default Homepage;