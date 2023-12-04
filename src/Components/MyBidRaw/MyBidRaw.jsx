

const MyBidRaw = ({bid}) => {

    const {_id, job_title, employerEmail, deadline, status} = bid

    return (
            <tr key={_id}>
                                <th>1</th>
                                <td>{job_title}</td>
                                <td>{employerEmail
                                }</td>
                                <td>{deadline
                                }</td>
                                <td >{status}</td>
                                <td >
                                    {status === 'Pending' && (
                                        <button
                                            onClick={() => handleCompleteBid(bid._id)}
                                            className="btn bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0"
                                        >
                                            Complete
                                        </button>
                                    )}
                                </td>
                            </tr>
    );
};

export default MyBidRaw;