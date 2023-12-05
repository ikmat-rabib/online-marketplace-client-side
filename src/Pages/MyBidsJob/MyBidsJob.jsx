import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyBidRaw from "../../Components/MyBidRaw/MyBidRaw";
import axios from "axios";


const MyBidsJob = () => {

    const { user } = useAuth()
    const [bidJobs, setBidJobs] = useState([])

    const url = `https://assignment-11-server-puce-iota.vercel.app/bidJobs?bidderEmail=${user?.email}`;

    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBidJobs(res.data)})
    }, [])

    const userBidJobs = bidJobs.filter(userBidJob => userBidJob.bidderEmail == user?.email)

    console.log(userBidJobs);

    // userBidJobs.map(bid =>  )

    return (
        <div className="max-w-7xl mx-auto h-screen">
            <h3 className="text-center text-3xl font-medium my-10">Total Bids: {userBidJobs.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Employer Email</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            userBidJobs.map(bid => <MyBidRaw key={bid._id} bid={bid}></MyBidRaw>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBidsJob;