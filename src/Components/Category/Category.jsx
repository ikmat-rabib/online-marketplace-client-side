import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import JobCards from "../JobCards/JobCards";
import { useEffect, useState } from "react";


const Category = () => {

    const loadedJobs = useLoaderData()
    console.log(loadedJobs);

    const [tabIndex, setTabIndex] = useState(0);

    const indexMap = {
        "0": "Web Development",
        "1": "Digital Marketing",
        "2": "Graphics Design",
      };
    
    useEffect(() => {
        fetch(`/category/${indexMap[tabIndex+'']}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }, [tabIndex])


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

                    <TabPanel>
                        <JobCards></JobCards>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <JobCards></JobCards>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <JobCards></JobCards>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Category;