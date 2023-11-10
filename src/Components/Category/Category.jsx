import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import JobCard from "../JobCard/JobCard";
import { MagnifyingGlass } from 'react-loader-spinner'


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
                        const res = await fetch(`http://localhost:5000/jobs?category=${indexMap[category]}`);
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
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-10 space-y-3">
                <h3 className=" text-3xl font-bold">Browse Services By Category</h3>
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
                            <MagnifyingGlass
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="MagnifyingGlass-loading"
                                wrapperStyle={{}}
                                wrapperClass="MagnifyingGlass-wrapper"
                                glassColor='#c0efff'
                                color='#e15b64'
                            />
                        </div> :
                            <div>
                                <TabPanel >
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 my-10 max-w-6xl mx-auto gap-10">


                                        {categoryData["Web Development"].map((job, index) => (
                                            <JobCard key={index} job={job} />
                                        ))}

                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 my-10 max-w-6xl mx-auto gap-10">


                                        {categoryData["Digital Marketing"].map((job, index) => (
                                            <JobCard key={index} job={job} />
                                        ))}

                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 my-10 max-w-6xl mx-auto gap-10">


                                        {categoryData["Graphics Design"].map((job) => (
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