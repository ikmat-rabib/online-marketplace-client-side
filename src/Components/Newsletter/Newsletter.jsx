import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Newsletter = () => {

    const axiosSecure = useAxiosSecure()
    // const [ , refetch] = useNewsletter()

    const handleSubscribe = async e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;

        const newNewsletter = { name, email };

        console.log(newNewsletter);

        const res = await axiosSecure.post('https://assignment-11-server-puce-iota.vercel.app/newsletter', newNewsletter);

        const data = res.data;
        console.log(data);

        if (data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Subscribed to our Newsletter',
                icon: 'success',
                confirmButtonText: 'Cool',
            });
            // refetch()
        }
    };


    return (
        <div className="bg-[#5bbb7b] py-20">

            <div className="text-center space-y-2 mb-10">
                <h3 className="text-4xl font-bold text-white">Join our <span className="text-black">Newsletter</span></h3>
                <p className="font-medium ">Get updated regularly by our Newsletter</p>
            </div>

            <div className="flex justify-center">
                <form onSubmit={handleSubscribe} className="md:space-x-10 flex flex-wrap justify-center">
                    <input className="py-2 md:w-60 rounded-lg bg-[#13234e] pl-2" placeholder="Name" type="text" name="name" id="" />
                    <input className="py-2 md:w-60 rounded-lg bg-[#13234e] pl-2" placeholder="Email" type="email" name="email" id="" />
                    <input className="btn bg-[#5bbb7b] hover:bg-[#43a062] hover:scale-105 text-black border" type="submit" value="Subscribe now" />
                </form>
            </div>

        </div>
    );
};

export default Newsletter;