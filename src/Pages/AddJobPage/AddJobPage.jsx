import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const AddJobPage = () => {

    const auth = useContext(AuthContext);

    const handleAddJobs = e => {
        e.preventDefault();

        const form = e.target;

        const title = form.title.value;
        const email = form.email.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const description = form.description.value;

        const newJob = { title, email, category, deadline, minPrice, maxPrice, description };

        console.log(newJob);

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
                    <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                </div>

                {/* email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Email of the employer</span>
                    </label>
                    <input type="text" name="email" defaultValue={auth.user?.email} readOnly className="input input-bordered" required />
                </div>

                {/* category */}

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Pick a Category</span>
                        </label>
                        <select className="select select-bordered" name="category" required>
                            <option disabled selected>Category</option>
                            <option>Web Development</option>
                            <option>Digital Marketing</option>
                            <option>Graphics Design</option>
                        </select>
                    </div>

                    {/* <label className="label">
                        <span className="label-text dark:text-white">Job Category</span>
                    </label>
                    <input type="text" name="category" placeholder="Category" className="input input-bordered" required /> */}


                {/* Deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Job Deadline</span>
                    </label>
                    <input type="text" name="deadline" placeholder="Deadline" className="input input-bordered" required />
                </div>

                {/* Minimum price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Minimum price</span>
                    </label>
                    <input type="text" name="minPrice" placeholder="Min Price" className="input input-bordered" required />
                </div>

                {/* Maximum price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Maximum Price</span>
                    </label>
                    <input type="text" name="maxPrice" placeholder="Max Price" className="input input-bordered" required />
                </div>

                {/* description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="description" id="" cols="30" rows="5"></textarea>
                </div>

                <div className="form-control mt-6">
                    <input className="btn bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0" type="submit" value="Add Job" />
                </div>
            </form>
        </div>
    );
};

export default AddJobPage;