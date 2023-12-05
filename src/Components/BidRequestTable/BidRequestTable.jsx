import { useState } from "react";
import Swal from "sweetalert2";


const BidRequestTable = ({ bidRequests }) => {

    const { job_title, bidderEmail, bidderDeadline, bidPrice, status, _id } = bidRequests



    const handleReject = (_id) => {

        console.log(_id);

        const updatedStatus = {
            status,
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

        console.log(_id);

        const updatedStatus = {
            status,
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
                    (status === 'Pending') ?
                    status : <progress className="progress progress-success w-56" value="40" max="100"></progress>
                }
            </td>
            <td >
                {
                    (status === 'Pending') && (
                        <div className=" flex gap-2">

                            <button
                                onClick={() => handleAccept(_id,)}
                                className="btn btn-sm bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0">Accept</button>

                            <button
                                onClick={() => handleReject(_id,)}
                                className="btn btn-sm bg-red-600 hover:bg-red-800 text-white border-0">Reject</button>
                        </div>
                    )
                }
            </td>
        </tr>
        </>
    );
};

export default BidRequestTable;