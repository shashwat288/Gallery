
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app, auth } from "../firebase/firebase"
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const Login = () => {





    const [values, setValues] = useState({

        email: "",
        password: "",

    })
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const auth = getAuth();
    const handleSubmit = e => {
        if (!values.email || !values.password) {
            setErrorMsg('All fields are required !!');
            return;
        }
        setErrorMsg("")


        setSubmitButtonDisabled(true);
        //    window.location="/"

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setSubmitButtonDisabled(false);
                window.location = "/";
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
                console.log(err.message)
            });
    }

    // const signInWithGoogle = async () => {
    // const provider = new GoogleAuthProvider();
    // provider.addScope('profile');
    // provider.addScope('email');
    // const result =  signInWithPopup(auth, provider);
    // }
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider(); // Create GoogleAuthProvider instance
        signInWithPopup(auth, provider) // Sign in with Google popup
            .then((result) => {
                // Handle successful sign-in
                const user = result.user;
                console.log('User signed in:', user);
                window.location = '/'; // Redirect user to homepage after successful sign-in
            })
            .catch((error) => {
                // Handle errors
                console.error('Google sign-in error:', error);
            });
    };




    return (
        <main className="flex   bg-slate-300 ">

            <div className="w-full  flex items-center justify-center lg:justify-center">
                <div className="p-8 mt-20 mb-5 w-[600px]">
                    <h1 className="text-6xl font-semibold">Login</h1>
                    <p className="mt-6 ml-1">
                        Don't have an account ?{" "}
                        <Link to='/register'
                            className="underline hover:text-blue-400 cursor-pointer "
                        >
                            Sign Up

                        </Link>
                    </p>

                    <div className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group">
                        <FcGoogle size={22} />
                        <span
                            className="font-medium text-black group-hover:text-white"
                            onClick={handleGoogleSignIn}
                        >
                            Login with Google
                        </span>
                    </div>

                    <form>
                        <div className="mt-10 pl-1 flex flex-col">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder='Email Daal Na Bhai...'
                                name="email"
                                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                                onChange={(event) =>
                                    setValues((prev) => ({ ...prev, email: event.target.value }))
                                }
                            />
                        </div>
                        <div className="mt-10 pl-1 flex flex-col">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder='Wahi TOOFANI Wala Password'
                                name="password"
                                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                                onChange={(event) =>
                                    setValues((prev) => ({ ...prev, password: event.target.value }))
                                }
                            />
                        </div>
                        <div className=' pt-6 font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-red-500'>{errorMsg}</div>
                        <button
                            className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
                            onClick={handleSubmit} disabled={submitButtonDisabled}
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>

        </main>
    )
}

export default Login