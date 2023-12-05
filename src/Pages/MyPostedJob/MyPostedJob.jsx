import { useContext, useEffect, useState } from "react";
import PostedJobCard from "../../Components/PostedJobCard/PostedJobCard";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const MyPostedJob = () => {

    const { user } = useContext(AuthContext)

    const [addedJobs, setAddedJobs] = useState([])

    const url = `https://assignment-11-server-puce-iota.vercel.app/jobs?employer_email=${user?.email}`;

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setAddedJobs(res.data)
            })

        // fetch(url, )
        //     .then(res => res.json())
        //     .then(data => setAddedJobs(data))
    }, [])

    const userPostedJobs = addedJobs.filter(userPostedJob => userPostedJob.
        employer_email == user?.email)

    const handleDeleteJob = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-puce-iota.vercel.app/jobs/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )

                            const remaining = addedJobs.filter(job => job._id !== id)
                            setAddedJobs(remaining)
                        }
                    })
            }
        })
    }



    return (
        <>
            <Helmet>
                <title>Waark | Posted Job</title>
            </Helmet>
            <div className="max-w-7xl mx-auto ">
                <h3 className=" text-3xl font-bold text-center my-10">Total Jobs Posted: {userPostedJobs.length}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-10 mx-4 lg:mx-0">
                    {
                        userPostedJobs.map(job => <PostedJobCard key={job._id} job={job} handleDeleteJob={handleDeleteJob}></PostedJobCard>)
                    }
                </div>

            </div>
        </>
    );
};

export default MyPostedJob;