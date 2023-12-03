

const BidsTable = ({ myBids }) => {

    const handleCompleteBid = () => {

    }


    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Email</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myBids.map(bid => <tr key={bid._id}>
                                <th>1</th>
                                <td>{bid.job_title}</td>
                                <td>{bid.employerEmail
                                }</td>
                                <td>{bid.deadline
                                }</td>
                                <td >{bid.status}</td>
                                <td >
                                    {bid.status === 'Pending' && (
                                        <button
                                            onClick={() => handleCompleteBid(bid._id)}
                                            className="btn bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0"
                                        >
                                            Complete
                                        </button>
                                    )}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default BidsTable;