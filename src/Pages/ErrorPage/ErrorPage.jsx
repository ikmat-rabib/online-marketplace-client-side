import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-w-7xl mx-auto text-center">
            <img className="mx-auto" src="https://i.ibb.co/3k6mJjQ/vecteezy-internet-network-warning-404-error-page-or-file-not-found-removebg-preview.png" alt="" />
            <Link to="/" className="btn bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800">Go Home</Link>
        </div>
    );
};

export default ErrorPage;