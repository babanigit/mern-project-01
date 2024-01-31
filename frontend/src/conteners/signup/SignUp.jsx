import React, { useState } from "react";

import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, userSet] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cPassword: "",
  });

  let name, value;
  const handleInput = (e) => {

    name = e.target.name;
    value = e.target.value;

    userSet({ ...user, [name]: value });

    console.log("handleInput clicked");
    console.log(user);
  };

  const submit = async(e) => {
    e.preventDefault();
    const { name,email,phone,work,password,cPassword} = user;


  }

  return (
    <>
      <div className=" w-full h-screen">
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className=" fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[630px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              {/* <h1 className="text-3xl font-bold">Sign Up</h1> */}
              <form className="w-full flex flex-col py-4"
                method="POST"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
                  placeholder="your name"
                  onChange={handleInput}
                />

                <input
                  placeholder="email"
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  value={user.email}
                  onChange={handleInput}
                  name="email"
                />

                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="phone"
                  value={user.phone}
                  onChange={handleInput}
                  placeholder="phone"
                  name="phone"
                />

                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="profession"
                  value={user.work}
                  onChange={handleInput}
                  placeholder="profession"
                  name="profession"
                />

                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="password"
                  name="password"
                />

                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="cPassword"
                  value={user.cPassword}
                  onChange={handleInput}
                  placeholder="retype password"
                  name="cPassword"
                />

                {/* submit function */}
                <button
                  className="bg-red-600 py-3 my-6 rounded font-bold"
                  type="submit"
                  // function to submit the data in backend
                  onClick={submit}
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
  );
};

export default SignUp;
