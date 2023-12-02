

const BidsTable = ({ myBids }) => {


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
                                <td>Cy Ganderton</td>
                                <td>{bid.employerEmail
                                }</td>
                                <td>{bid.employerEmail
                                }</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default BidsTable;