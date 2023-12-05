import { useState } from "react";
import Swal from "sweetalert2";


const MyBidRaw = ({ bid }) => {

    const { _id, job_title, employerEmail, deadline, status } = bid

    const [loading, setLoading] = useState(false);

    console.log(loading);

    const handleCompleteBid = _id => {
        console.log(_id);
        const newStatus = (status === "In progress") ? "Complete" : status;
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
                            setLoading(true);
                        }
                    });
            }
        });
    };

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
                {(status === 'In progress') ?
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