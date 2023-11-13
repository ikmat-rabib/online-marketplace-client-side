import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddJobPage = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const handleAddJobs = e => {
        e.preventDefault();

        const form = e.target;

        const job_title = form.job_title.value;
        const email = form.email.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const min_price = form.min_price.value;
        const max_price = form.max_price.value;
        const description = form.description.value;

        const newJob = { job_title, email, category, deadline, min_price, max_price, description };

        console.log(newJob);

        fetch('http://localhost:5000/add-job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/posted-job')
                }
            })

    }

    return (
        <div className="max-w-screen-lg mx-auto my-10 p-6 glass rounded-xl text-black dark:text-white drop-shadow-2xl">
            <h2 className="text-3xl font-bold text-center ">Add Job Here</h2>
            <form onSubmit={handleAddJobs} className="card-body">

                {/* title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Job Title</span>
                    </label>
                    <input type="text" name="job_title" placeholder="Title" className="input input-bordered" required />
                </div>

                {/* email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Email of the employer</span>
                    </label>
                    <input type="email" name="email" defaultValue={auth.user?.email} readOnly className="input input-bordered" required />
                </div>

                <div className="flex gap-3">

                    {/* category */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text dark:text-white">Pick a Category</span>
                        </label>
                        <select className="select select-bordered" name="category" required>
                            <option disabled selected>Select a category</option>
                            <option>Web Development</option>
                            <option>Digital Marketing</option>
                            <option>Graphics Design</option>
                        </select>
                    </div>

                    {/* Deadline */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text dark:text-white">Job Deadline</span>
                        </label>
                        <input type="date" className="input input-bordered" name="deadline" id="" />
                    </div>
                </div>


                <div className="flex gap-3">
                    {/* Minimum price */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text dark:text-white">Minimum price</span>
                        </label>
                        <input type="text" name="min_price" placeholder="Min Price" className="input input-bordered" required />
                    </div>

                    {/* Maximum price */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text dark:text-white">Maximum Price</span>
                        </label>
                        <input type="text" name="max_price" placeholder="Max Price" className="input input-bordered" required />
                    </div>
                </div>

                {/* description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="description" id="" cols="30" rows="5"></textarea>
                </div>

                <div className="form-control mt-6">
                    <input className="btn bg-[#5bbb7b] hover:bg-[#43a062] text-black border-0" type="submit" value="Add Job" />
                </div>
            </form>
        </div>
    );
};

export default AddJobPage;