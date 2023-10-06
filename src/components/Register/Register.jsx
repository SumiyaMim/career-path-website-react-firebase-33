/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Register = () => {

    const { googleSignIn, signUp, handleUpdateProfile } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // create user with google
    const handleGoogleRegister = () => {
        googleSignIn().then((result) => console.log(result.user));
    };

    // create user
    const handleRegister = (e) => {
        e.preventDefault();

        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError("Minimum eight characters , at least one letter and one number");
        }    
        else {
            setError("");
            signUp(email, password).then((result) => {
                handleUpdateProfile(name)
                .then(() => {
                    toast.success('Created account successfully!')
                    navigate('/');
                })
            });
        }
    }

  return (
    <div>
      <Helmet>
        <title>Career Path | Register</title>
      </Helmet>
    <div className="py-16">
      <div className="shadow p-8 md:p-12 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-md">
        <h2 className="text-2xl font-extrabold text-center mb-8">
          Create Account
        </h2>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className='mt-2 text-sm text-red-600 font-semibold'>{error}</p>
          <div className="form-control my-6">
            <button onClick={handleRegister} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 w-full rounded-md text-white font-semibold text-sm">
              Register
            </button>
          </div>
          <div className="divider">or</div>
          <div className="form-control my-6">
            <button onClick={handleGoogleRegister} className="btn btn-outline normal-case border border-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-white p-3 w-full rounded-md text-[#9873FF] font-semibold text-sm hover:bg-gradient-to-r hover:from-[#7E90FE] hover:to-[#9873FF] hover:border-transparent hover:text-white">
            <FaGoogle></FaGoogle>
              Google
            </button>
          </div>
          <p className="text-[#706F6F] text-center text-xs font-semibold">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-[#9873FF]">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register
