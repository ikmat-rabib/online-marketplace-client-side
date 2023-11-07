import { useLoaderData, useParams } from "react-router-dom";
import JobCard from "../JobCard/JobCard";


const JobCards = ({jobcategory}) => {

    const jobs = useLoaderData()
    const { category_name } = useParams;
    console.log(category_name);

    const allJobs = jobs.filter(job => job[jobs]?.category === category_name)
    console.log(allJobs);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 my-10 max-w-6xl mx-auto gap-10">
            {allJobs.map(displayJob => <JobCard key={displayJob._id} displayJob={displayJob}>
                <h2>{displayJob.job_title}</h2>
            </JobCard>)}
        </div>
    );
};

export default JobCards;