import { Link } from "react-router-dom";


const PostedJobCard = ({ job, handleDeleteJob }) => {

    const { job_title, deadline, min_price, max_price, description, _id } = job;

    // console.log(job);

    const shortDescription = description.length > 150 ? `${description.slice(0, 160)}...` : description;



    return (
        <div>
            <div className="card bg-base-100 shadow-xl hover:shadow-[#5bbb7b]">
                <div className="card-body flex h-auto p-4">
                    <h2 className="text-xl font-bold m-3 text-center">{job_title}</h2>
                    <p><span className="font-medium">Deadline: </span>{deadline}</p>
                    <p><span className="font-medium">Price Range:</span> ${min_price}~${max_price}</p>
                    <p className="font-medium my-4 flex-grow text-justify">{shortDescription}</p>
                    <div className="card-actions justify-between">
                        <button onClick={() => handleDeleteJob(_id)} className="btn bg-red-500 hover:bg-red-700 hover:scale-95 text-white ">delete</button><Link to={`/update-job/${_id}`} className="btn bg-[#5bbb7b] hover:bg-[#43a062] hover:scale-105 text-black">update</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostedJobCard;