


const JobCard = ({ job }) => {

    const { job_title, deadline, min_price, max_price } = job;



    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{deadline}</p>
                    <p>Range: {min_price}~{max_price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;