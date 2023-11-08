import { useLoaderData } from "react-router-dom";


const JobCard = () => {

    const loadedJobs = useLoaderData()
    // console.log(loadedJobs);

    const {job_title, deadline} = loadedJobs




    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{deadline}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;