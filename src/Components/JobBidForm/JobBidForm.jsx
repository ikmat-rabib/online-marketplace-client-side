import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";


const JobBidForm = ({ loadedJob }) => {

    // const auth = useContext(AuthContext);
    const { user } = useAuth()
    const { job_title, deadline, min_price, max_price, description, employer_email
        , _id } = loadedJob;

    const navigate = useNavigate()

    const handleBidJobs = e => {
        e.preventDefault();

        const form = e.target;

        const job_title = form.job_title.value;
        const bidderEmail = form.bidderEmail.value;
        const employerEmail = form.employerEmail.value;
        const min_price = form.min_price.value;
        const max_price = form.max_price.value;
        const bidPrice = form.bidPrice.value;
        const deadline = form.deadline.value;
        const bidderDeadline = form.bidderDeadline.value;
        const description = form.description.value;
        const status = 'Pending';

        const newBid = {job_title, bidderEmail, employerEmail, min_price, max_price, bidPrice, deadline, bidderDeadline, description, status };

        // console.log(newBid);

        fetch('https://assignment-11-server-7dsms1ns9-ikmat-rabib.vercel.app/bid-job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBid)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Bid Request Successful', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                    navigate('/bids')
                }
            })

    }

    return (
        <div className="max-w-screen-lg mx-auto my-10 p-6 glass rounded-xl bg-slate-200 drop-shadow-2xl">
            <h2 className="text-3xl font-bold text-center underline">Place Your Bid</h2>
            <form onSubmit={handleBidJobs} className="card-body pt-5">

                {/* job_title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Job Title</span>
                    </label>
                    <input type="text" name="job_title" defaultValue={job_title} readOnly className="input input-bordered" />
                </div>

                <div className="flex ">
                    {/* buyer email */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">Buyer Email</span>
                        </label>
                        <input type="email" name="employerEmail" defaultValue={employer_email} readOnly className="input input-bordered" />
                    </div>

                    {/* bidder email */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">Your Email</span>
                        </label>
                        <input type="email" name="bidderEmail" defaultValue={user?.email} readOnly className="input input-bordered" />
                    </div>
                </div>

                <div className="flex ">
                    <div className="flex w-1/2">
                        {/* Price min */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text ">Minimum Bidding Price</span>
                            </label>
                            <input type="text" name="min_price" defaultValue={min_price} readOnly className="input input-bordered" />
                        </div>

                        {/* price max*/}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text ">Maximum Bidding Price</span>
                            </label>
                            <input type="text" name="max_price" defaultValue={max_price} readOnly className="input input-bordered" />
                        </div>
                    </div>

                    {/* your bidding price */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Your Bidding Price<span className="text-red-700">*</span></span>
                        </label>
                        <input type="text" name="bidPrice" placeholder="Price" className="input input-bordered" required />
                    </div>
                </div>

                <div className="flex">
                    {/* buyer Deadline */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">Job Deadline by Buyer</span>
                        </label>
                        <input type="text" name="deadline" defaultValue={deadline} readOnly className="input input-bordered" required />
                    </div>

                    {/* your Deadline */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Post Your Deadline<span className="text-red-700">*</span></span>
                        </label>
                        <input type="date" name="bidderDeadline" placeholder="Deadline" className="input input-bordered" required />
                    </div>
                </div>

                {/* job description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Job Description</span>
                    </label>
                    <input type="text" name="description" defaultValue={description} readOnly className="input input-bordered" required />
                </div>

                {
                    (user?.email === employer_email) ?
                        <div className="form-control mt-6">
                            <input className="btn btn-disabled bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0" type="submit" value="You Can't Bid This Job" />
                        </div>
                        :
                        <div to='/bids' className="form-control mt-6">
                            <input className="btn bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0" type="submit" value="Bid This Job" />
                        </div>
                }
            </form>
        </div>
    );
};

export default JobBidForm;