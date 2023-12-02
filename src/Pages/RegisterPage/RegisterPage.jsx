import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { updateProfile } from "firebase/auth";


const RegisterPage = () => {

    const { createUser, handleGoogleSignIn } = useContext(AuthContext)
    
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')

    console.log(success);

    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password, photo);

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 character or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must have at least one Uppercase character');
            return
        } else if (!/[#?!@$%^&*-]/.test(password)) {
            setRegisterError('Password must have at least 1 special character')
            return;
        }

        setRegisterError('');
        setSuccess('');

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Registration Successful')

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                .then()
                .catch()

                toast.success('Registration Successful', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message);
            })
    }

    return (
            <div className="py-32 ">
                <div className="sm:w-auto md:w-2/4 mx-auto text-center  bg-slate-200 drop-shadow-2xl rounded-2xl py-6 my-10">
                    <h2 className="text-3xl mt-6 font-bold">Please Register</h2>
                    <form onSubmit={handleRegister} className="card-body md:w-mx-auto">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered " required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className=" label-text ">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered " required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className=" label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered " required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className=" label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered " required />

                        </div>

                        {
                            registerError && <p className="bg-white text-2xl py-2 font-medium text-red-600 rounded-lg">{registerError}</p>
                        }


                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800 border-0 ">Register</button>
                        </div>
                    </form>
                    <p className="mb-">Already have an account? <Link className="text-indigo-800 font-bold" to='/login'>Login Here.</Link></p>

                    <div>
                        <p>or,</p>
                        <h3 className="text-2xl font-semibold">Sign in with</h3>
                        <button onClick={handleGoogleSignIn} className="p-3 my-3 text-3xl border rounded-lg bg-[#5bbb7b] hover:bg-[#43a062] text-indigo-800"> <FaGoogle></FaGoogle> </button>
                    </div>
                </div>
                
            </div>
    );
};


export default RegisterPage;