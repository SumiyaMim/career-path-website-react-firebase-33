/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const { googleSignIn, signIn } = useContext(AuthContext);

    // login with google
    const handleGoogleLogin = () => {
        googleSignIn().then((result) => 
          // console.log(result.user)
          navigate('/')
        );
    };

    // login user
    const handleLogin = (e) => {
        e.preventDefault();

        if ((email, password)) {
            signIn(email, password)
            .then((result) => {
                toast.success('User logged in successfully!')
                console.log(result.user)
                
                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                console.log(err.message);
                setError('Invalid email or password')
            });
        }
        else {
            setError('Invalid email or password')
        }
    }

  return (
    <div>
      <Helmet>
        <title>Career Path | Login</title>
      </Helmet>
      <div className="py-16">
        <div className="shadow p-8 md:p-12 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-md">
          <h2 className="text-2xl font-extrabold text-center mb-8">
            Login now!
          </h2>
          <form>
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
              <button onClick={handleLogin} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 w-full rounded-md text-white font-semibold text-sm">
                Login
              </button>
            </div>
            <div className="divider">or</div>
            <div className="form-control my-6">
              <button onClick={handleGoogleLogin} className="btn btn-outline normal-case border border-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-white p-3 w-full rounded-md text-[#9873FF] font-semibold text-sm hover:bg-gradient-to-r hover:from-[#7E90FE] hover:to-[#9873FF] hover:border-transparent hover:text-white">
              <FaGoogle></FaGoogle>
                Google
              </button>
            </div>
            <p className="text-[#706F6F] text-center text-xs font-semibold">
              Don’t have an account?{" "}
              <Link to="/register">
                <span className="text-[#9873FF]">Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
