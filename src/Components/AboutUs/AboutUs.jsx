
import { FaCheck } from "react-icons/fa6";


const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto py-20">

            <div className="md:flex justify-between items-center">

                <div className="md:w-1/2 p-3 md:p-0 space-y-3">
                    <h3 className="text-4xl font-bold text-">About <span className="text-[#5bbb7b]">Us</span></h3>
                    <p className="font-medium text-">We're the bridge connecting skilled professionals to a myriad of exciting projects, fostering a thriving community of collaboration. Join us and unlock your full potential for success.</p>
                    <p className="flex items-center gap-2 font-medium text-"><FaCheck className="text-green-600"></FaCheck>Expert Services</p>
                    <p className="flex items-center gap-2 font-medium text-"><FaCheck className="text-green-600"></FaCheck>Endless Opportunities</p>
                    <p className="flex items-center gap-2 font-medium text-"><FaCheck className="text-green-600"></FaCheck>Community Spirit</p>
                    <p className="flex items-center gap-2 font-medium text-"><FaCheck className="text-green-600"></FaCheck>Success Stories:</p>
                </div>

                <div className="md:w-1/2 flex justify-center mt-5 md:mt-0 md:justify-end">
                    <div className="w-80 h-60 border-4 border-[#5bbb7b]   rounded-lg relative">
                        <img className="w-80 rounded-lg shadow-2xl shadow-slate-500 absolute bottom-5 right-[20px]" src="https://i.ibb.co/xhvZSHk/trainers.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;