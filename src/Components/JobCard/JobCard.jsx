

const JobCard = ({displayJob}) => {

    const {jobs} = displayJob


    const {job_id, employer_email, job_title, deadline, description, category, min_price, max_price} = jobs;


    return (
        <div>
            <h3>hoiddfgh </h3>
            <h3>hoiddfgh {job_title}</h3>
        </div>
    );
};

export default JobCard;