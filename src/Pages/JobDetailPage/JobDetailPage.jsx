import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import JobBidForm from "../../Components/JobBidForm/JobBidForm";

const JobDetailPage = () => {

    const { user } = useContext(AuthContext)
    // console.log(user.email);

    const loadedJob = useLoaderData()
    const { job_title, deadline, min_price, max_price, description, employer_email
        , _id } = loadedJob

    return (
        <div className="max-w-7xl mx-auto ">
            <div className="text-center space-y-4 my-10">
                <h3 className="font-bold text-3xl">{job_title}</h3>
                <p className="font-medium">Job Deadline: {deadline}</p>
                <p className="font-medium">Price Range: ${min_price}~${max_price}</p>
                <p><span className="font-semibold">Description:</span> {description}</p>
            </div>
            <div className="my-10">
                <JobBidForm loadedJob={loadedJob}></JobBidForm>
            </div>
        </div>
    );
};

export default JobDetailPage;