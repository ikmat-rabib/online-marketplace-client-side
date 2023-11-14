import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import PostedJobCard from "../../Components/PostedJobCard/PostedJobCard";
import Swal from "sweetalert2";


const MyPostedJob = () => {

    const { user } = useContext(AuthContext)

    const [addedJobs, setAddedJobs] = useState([])

    const url = `http://localhost:5000/jobs?employer_email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddedJobs(data))
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
                fetch(`http://localhost:5000/jobs/${id}`, {
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
        <div className="max-w-7xl mx-auto ">
            <h3 className=" text-3xl font-bold text-center my-10">Total Jobs Posted: {userPostedJobs.length}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-10 mx-4 lg:mx-0">
                {
                    userPostedJobs.map(job => <PostedJobCard key={job._id} job={job} handleDeleteJob={handleDeleteJob}></PostedJobCard>)
                }
            </div>

        </div>
    );
};

export default MyPostedJob;