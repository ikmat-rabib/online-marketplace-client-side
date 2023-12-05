
import { useState } from "react";
import Swal from "sweetalert2";


const BidRequestTable = ({ bidRequests }) => {

    const { job_title, bidderEmail, bidderDeadline, bidPrice, status, _id } = bidRequests

    const [progressBarVisible, setProgressBarVisible] = useState(false);

    const handleReject = (_id) => {

        console.log(_id);


        const newStatus = (status === "Pending") ? "Rejected" : status;
        const updatedStatus = {
            status: newStatus,
        };

        console.log(updatedStatus);

        Swal.fire({
            title: "Are you sure?",
            text: "Please double check before submitting",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-puce-iota.vercel.app/bid_req/${_id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updatedStatus),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            console.log("success");

                            Swal.fire({
                                title: "Success!",
                                text: "Thank you for your hard work",
                                icon: "success",
                                confirmButtonText: "OK",
                            });
                        }
                    });
            }
        });
    };

    const handleAccept = (_id) => {

        

        const newStatus = status === "Pending" ? "In progress" : "Rejected";
        const updatedStatus = {
            status: newStatus,
        };

        console.log(updatedStatus);

        Swal.fire({
            title: "Are you sure?",
            text: "Please double check before submitting",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-puce-iota.vercel.app/bid_req/${_id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedStatus),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            console.log("success");

                            Swal.fire({
                                title: "Success!",
                                text: "Thank you for your hard work",
                                icon: "success",
                                confirmButtonText: "OK",
                            });
                            setProgressBarVisible(true);
                        }
                    });
            }
        });
    };


    return (
        <> <tr key={_id}>
            <th></th>
            <td>{job_title}</td>
            <td>{bidderEmail}</td>
            <td>{bidderDeadline}</td>
            <td>{bidPrice}</td>
            <td>
                {
                    (status === 'Pending' || status === 'In progress' || status === 'Rejected') ? status : undefined
                }

            </td>
            <td >
                {
                    (status === 'Pending') && (
                        <div className=" flex gap-2">
                            {(!progressBarVisible) ? (
                                <>
                                    <button
                                        onClick={() => handleAccept(_id,)}
                                        className="btn btn-sm bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0">Accept</button>

                                    <button
                                        onClick={() => handleReject(_id,)}
                                        className="btn btn-sm bg-red-600 hover:bg-red-800 text-white border-0">Reject</button>
                                </>
                                ) :
                                <progress className="progress progress-success w-56" value="40" max="100"></progress>
                            }
                        </div>
                    )
                }
            </td>
        </tr>
        </>
    );
};

export default BidRequestTable;