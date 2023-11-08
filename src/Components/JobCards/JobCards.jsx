// import { useLoaderData, useParams } from "react-router-dom";
import JobCard from "../JobCard/JobCard";


const JobCards = () => {

    

  

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 my-10 max-w-6xl mx-auto gap-10">
            <JobCard></JobCard>
        </div>
    );
};

export default JobCards;