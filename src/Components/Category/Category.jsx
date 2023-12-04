import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import JobCard from "../JobCard/JobCard";
import { ThreeDots } from 'react-loader-spinner'


const Category = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const indexMap = {
        "0": "Web Development",
        "1": "Digital Marketing",
        "2": "Graphics Design",
    };

    const [categoryData, setCategoryData] = useState({
        "Web Development": [],
        "Digital Marketing": [],
        "Graphics Design": [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                setTimeout(async () => {
                    for (const category in indexMap) {
                        const res = await fetch(`https://assignment-11-server-7dsms1ns9-ikmat-rabib.vercel.app/jobs?category=${indexMap[category]}`);
                        if (!res.ok) {
                            throw new Error(`Failed to fetch data for ${indexMap[category]}`);
                        }
                        const data = await res.json();
                        setCategoryData((prevData) => ({
                            ...prevData,
                            [indexMap[category]]: data,
                        }));
                    }
                    console.log(data);
                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    return (
        <div className="max-w-7xl mx-auto ">
            <div className="text-center mt-20 mb-8 space-y-3">
                <h3 className=" text-3xl font-bold">Browse Jobs By <span className="text-[#5bbb7b] ">Category</span></h3>
                <p className="text-sm font-">Find the perfect freelancer or project in your niche.</p>
            </div>
            <div className="text-center">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Digital Marketing</Tab>
                        <Tab>Graphics Design</Tab>
                    </TabList>


                    {
                        loading ? <div className="flex justify-center ">
                            <ThreeDots
                                height="80"
                                width="80"
                                radius="9"
                                color="#4fa94d"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </div>
                            :
                            <div>
                                <TabPanel >
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 mx-4 lg:mx-0">


                                        {categoryData["Web Development"].slice(-4).map((job) => (
                                            <JobCard key={job._id} job={job} />
                                        ))}

                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-10 mx-4 lg:mx-0">


                                        {categoryData["Digital Marketing"].slice(-4).map((job) => (
                                            <JobCard key={job._id} job={job} />
                                        ))}

                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-10 mx-4 lg:mx-0">


                                        {categoryData["Graphics Design"].slice(-4).map((job) => (
                                            <JobCard key={job._id} job={job} />
                                        ))}

                                    </div>
                                </TabPanel>

                            </div>
                    }
                </Tabs>
            </div>
        </div>
    );
};

export default Category;