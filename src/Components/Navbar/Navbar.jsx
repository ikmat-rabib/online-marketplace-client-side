import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink  to='/'>Home</NavLink></li>
        <li><NavLink to='/add-job'>Add Job</NavLink></li>
        <li><NavLink to='/posted-job'>My Posted Job</NavLink></li>
        <li><NavLink to='/bids'>My Bids</NavLink></li>
        <li><NavLink to='/bid-request'>Bid Request</NavLink></li>

    </>

    return (
        <div className="sticky z-10 bg-white px-8 top-0 left-0 right-0 on">

            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn border-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    {/* <Link to="/"><img className="hidden md:block hover:shadow" src="https://i.ibb.co/dBTZtH2/W-logo.png" alt="" /></Link> */}
                    <Link to='/'><div className="hidden md:block font-extrabold normal-case md:text-4xl ">Waark</div></Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">

                    {
                        user ?
                            <div className="dropdown dropdown-end dropdown-hover">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                                    
                                        <img className="w-10 rounded-full" src={user.photoURL} />
                                    
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><span><small className="text-black ">User: {user.displayName}</small></span></li>
                                    <li><span><small className="text-black ">Email: {user.email}</small></span></li>
                                    <li><button onClick={handleSignOut} className="btn btn-sm bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0 rounded-lg">Sign Out</button></li>
                                </ul>
                            </div>
                            :
                            <div >
                                <Link to='/login'>
                                    <button className="btn btn-sm bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0 rounded-lg  md:mr-3">Login</button>
                                </Link>

                                <Link to='/register'>
                                    <button className="btn btn-sm bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0 rounded-lg ">Register</button>
                                </Link>
                            </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;






