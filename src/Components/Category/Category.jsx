import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import JobCards from "../JobCards/JobCards";


const Category = () => {

    const jobCategories = useLoaderData()
    

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-10 space-y-3">
                <h3 className=" text-3xl font-bold">Browse Services By Category</h3>
                <p className="text-sm font-">Find the perfect freelancer or project in your niche.</p>
            </div>
            <div className="text-center">
                <Tabs>
                    <TabList>
                        {
                            jobCategories.map(jobcategory => <Tab key={jobcategory._id} jobcategory={jobcategory}>{jobcategory.category_name}</Tab>)
                        }

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