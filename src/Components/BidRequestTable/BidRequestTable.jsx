import { useState } from "react";
import Swal from "sweetalert2";


const BidRequestTable = ({ bidRequests }) => {

    const { job_title, bidderEmail, bidderDeadline, bidPrice, status, _id } = bidRequests

    const [value, setValue] = useState(status);

    const handleComplete = (_id) => {

        console.log(_id);

        const on = [value];
        const status = on[0];
        const done = {
            status,
        };
        console.log(done);

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
                fetch(`https://assignment-11-server-7dsms1ns9-ikmat-rabib.vercel.app/bid_req/${_id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(done),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            console.log("success");
                            // setCurrent(done.status);
                            // console.log(done.status);


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
            <td >{status}</td>
            <td >
                {
                    (status === 'Pending') && (
                        <div className=" flex gap-2">

                            <button
                                onClick={() => handleComplete(_id, setValue("In progress"))}
                                className="btn btn-sm bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0">Accept</button>

                            <button
                                onClick={() => handleComplete(_id, setValue("Rejected"))}
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