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
        <li><NavLink  to='/add-job'>Add Job</NavLink></li>
        <li><NavLink  to='/posted-job'>My Posted Job</NavLink></li>
        <li><NavLink  to='/bids'>My Bids</NavLink></li>
        <li><NavLink  to='/bid-request'>Bid Request</NavLink></li>

    </>

    return (
        <div className="mx-8">

            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn bg-[#1d308d] border-0 text-white hover:text-[#1d308d] lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1d308d] text-white rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="dark:invert" src="https://i.ibb.co/dBTZtH2/W-logo.png" alt="" />
                    <Link to='/'><div className="text-black dark:text-white font-extrabold normal-case md:text-4xl ">Waark</div></Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal dark:text-white  px-1 text-black">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                {
                        user ?
                            <div className="flex items-center">
                                    <span><small className="text-black dark:text-white ">{user.displayName}</small></span>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <button onClick={handleSignOut} className="btn btn-sm bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0 rounded-lg">Sign Out</button>
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






