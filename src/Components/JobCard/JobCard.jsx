import { Link } from "react-router-dom";



const JobCard = ({ job }) => {

    const { job_title, deadline, min_price, max_price, description, _id } = job;

    const shortDescription = description.length > 150 ? `${description.slice(0, 145)}...` : description;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl hover:shad">
                <div className="card-body flex h-auto p-4">
                    <h2 className="text-xl font-bold m-3 text-center">{job_title}</h2>
                    <p><span className="font-medium">Deadline: </span>{deadline}</p>
                    <p><span className="font-medium">Price Range:</span> ${min_price}~${max_price}</p>
                    <p className="font-medium my-4 flex-grow text-justify">{shortDescription}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/job/${_id}`} className="btn bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 ">Bid Now</Link >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;