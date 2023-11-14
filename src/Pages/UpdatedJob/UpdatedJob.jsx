import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";


const UpdatedJob = () => {

    const job = useLoaderData()
    const navigate = useNavigate()

    const auth = useContext(AuthContext);
    const { job_title, deadline, min_price, max_price, description, _id } = job;

    const handleUpdateJob = e => {
        e.preventDefault();

        const form = e.target;

        const job_title = form.job_title.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const min_price = form.min_price.value;
        const max_price = form.max_price.value;
        const description = form.description.value;

        const updatedJob = { job_title, category, deadline, min_price, max_price, description };

        console.log(updatedJob);

        fetch(`http://localhost:5000/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'This Job is Successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/posted-job')
                }
            })
    }

    return (
        <div className="max-w-screen-lg mx-auto my-10 bg-slate-200 rounded-xl drop-shadow-2xl">

            <form onSubmit={handleUpdateJob} className="card-body ">
                <h3 className="font-bold text-3xl text-center">Update {job_title}</h3>
                {/* title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Job Title</span>
                    </label>
                    <input type="text" name="job_title" defaultValue={job_title} placeholder="Title" className="input input-bordered" required />
                </div>

                {/* employer_email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email of the employer</span>
                    </label>
                    <input type="employer_email" name="email" defaultValue={auth.user?.email} readOnly className="input input-bordered" required />
                </div>

                <div className="flex md:gap-3">

                    {/* category */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Pick a Category</span>
                        </label>
                        <select className="select select-bordered"  name="category" required>
                            {/* <option disabled  selected>Category</option> */}
                            <option>Web Development</option>
                            <option>Digital Marketing</option>
                            <option>Graphics Design</option>
                        </select>
                    </div>

                    {/* Deadline */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Job Deadline</span>
                        </label>
                        <input type="date" defaultValue={deadline} className="input input-bordered" name="deadline" id="" />
                    </div>
                </div>


                <div className="flex md:gap-3">
                    {/* Minimum price */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Minimum price</span>
                        </label>
                        <input type="text" name="min_price" defaultValue={min_price} placeholder="Min Price" className="input input-bordered" required />
                    </div>

                    {/* Maximum price */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Maximum Price</span>
                        </label>
                        <input type="text" name="max_price" defaultValue={max_price} placeholder="Max Price" className="input input-bordered" required />
                    </div>
                </div>

                {/* description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="description" defaultValue={description} id="" cols="30" rows="5"></textarea>
                </div>

                <div className="form-control mt-6">
                    <input className="btn bg-[#5bbb7b] hover:bg-[#43a062] hover:scale-105 text-black" type="submit" value="Update Job" />
                </div>
            </form>
        </div>
    );
};

export default UpdatedJob;