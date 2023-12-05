

const MyBidRaw = ({ bid }) => {

    const { _id, job_title, employerEmail, deadline, status } = bid

    const handleCompleteBid = _id => {
        console.log(_id);
    }

    return (
        <tr key={_id}>
            <th></th>
            <td>{job_title}</td>
            <td>{employerEmail
            }</td>
            <td>{deadline
            }</td>
            <td >{status}</td>
            <td >
                { (status === 'In progress') ? 
                    <button
                        onClick={() => handleCompleteBid(_id)}
                        className="btn btn-sm bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0"
                    >
                        Complete
                    </button> 
                    :
                    <button
                        onClick={() => handleCompleteBid(_id)}
                        className="btn btn-sm btn-disabled bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0"
                    >
                        Complete
                    </button> 
                }
            </td>
        </tr>
    );
};

export default MyBidRaw;