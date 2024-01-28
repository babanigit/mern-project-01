

import React from 'react'

import { useNavigate, Link } from "react-router-dom";


const SignUp = () => {
  return (
    <>
    
    <div className=" w-full h-screen">
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className=" fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form action="POST" className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="name"
                  onChange={(e) => {
                    // setName(e.target.value);
                  }}
                  placeholder="Name"
                  name="Name"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  onChange={(e) => {
                    // setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  name="Email"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  onChange={(e) => {
                    // setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  name="Password"
                />

                {/* submit function */}
                <button
                  className="bg-red-600 py-3 my-6 rounded font-bold"
                  type="submit"
                  // onClick={submit}
                >
                  {" "}
                  signup{" "}
                </button>
              </form>
              <p>
                <span className="text-gray-600">Already have an account?</span>{" "}
                <Link to="/Signin">SignIn</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp