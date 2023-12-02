import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const JobBidForm = ({ loadedJob }) => {

    const auth = useContext(AuthContext);
    const { employer_email } = loadedJob;

    const navigate = useNavigate()

    const handleBidJobs = e => {
        e.preventDefault();

        const form = e.target;

        const bidderEmail = form.bidderEmail.value;
        const employerEmail = form.employerEmail.value;
        const deadline = form.deadline.value;
        const bidPrice = form.bidPrice.value;

        const newBid = { bidderEmail, employerEmail, deadline, bidPrice, };

        // console.log(newBid);

        fetch('http://localhost:5000/bid-job', {
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
                    toast.success('Bid Successful', {
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
            <h2 className="text-3xl font-bold text-center ">Place Your Bid</h2>
            <form onSubmit={handleBidJobs} className="card-body">

                {/* price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Price</span>
                    </label>
                    <input type="text" name="bidPrice" placeholder="Price" className="input input-bordered" required />
                </div>

                {/* email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Your Email</span>
                    </label>
                    <input type="email" name="bidderEmail" defaultValue={auth.user?.email} readOnly className="input input-bordered" required />
                </div>

                {/* buyer email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Buyer Email</span>
                    </label>
                    <input type="email" name="employerEmail" defaultValue={employer_email} readOnly className="input input-bordered" required />
                </div>

                {/* Deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Job Deadline</span>
                    </label>
                    <input type="date" name="deadline" placeholder="Deadline" className="input input-bordered" required />
                </div>

                {
                    (auth.user?.email === employer_email) ?
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