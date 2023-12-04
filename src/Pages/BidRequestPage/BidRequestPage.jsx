import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useMyBids from "../../Hooks/useMyBids";
import BidRequestTable from "../../Components/BidRequestTable/BidRequestTable";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const BidRequestPage = () => {

    const axiosSecure = useAxiosSecure()
    const [myBids] = useMyBids()
    const { user } = useAuth()

    const [bidRequests, setBidRequest] = useState([])

    const url = `https://assignment-11-server-7dsms1ns9-ikmat-rabib.vercel.app/bidJobs?employerEmail=${user?.email}`;

    useEffect(() => {
        axiosSecure.get(url)
        .then(res => {
            setBidRequest(res.data)
        })
    }, [url, axiosSecure])

    const userBidRequests = bidRequests.filter(userBidRequest => userBidRequest.employerEmail == user?.email)

    console.log(userBidRequests);

    return (
        <div className="max-w-7xl mx-auto h-screen">
        <h3 className="text-center text-3xl font-medium my-10">Total Bids: {userBidRequests.length}</h3>
        <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Bidder Email</th>
                            <th>Deadline</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className="">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            userBidRequests.map(bidRequests => <BidRequestTable key={bidRequests._id} bidRequests={bidRequests}></BidRequestTable>)
                        }


                    </tbody>
                </table>
            </div>
    </div>
    );
};

export default BidRequestPage;