import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Card, Button, Form, Input } from "antd";
import { signInWithEmail, signUpWithEmail } from "../../supabase/auth";
import uuid from "react-uuid";

const Auth = (params) => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.title == "SignUp") {
      const response = await signUpWithEmail(data);
      console.log(response);
    } else {
      const response = await signInWithEmail(data);
      if (response.status == 200) navigate("/main");
    }
  };

  return (
    <div>
      <form>
        {params.title == "SignUp" ? (
          <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 m-auto w-full">
              <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                <h3 className="text-2xl font-bold text-center">Sign Up</h3>
                <div>
                  <div className="mt-4">
                    <div>
                      <label className="block">
                        Name
                        <label>
                          <input
                            type="text"
                            placeholder="Name"
                            onChange={(e) => handleChange(e)}
                            value={data.name}
                            name="name"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </label>
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="block">
                        Email
                        <label>
                          <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => handleChange(e)}
                            value={data.email}
                            name="email"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </label>
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="block">
                        Password
                        <label>
                          <input
                            onChange={(e) => handleChange(e)}
                            value={data.password}
                            name="password"
                            type="Password"
                            placeholder="Password"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </label>
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="block">
                        State
                        <label>
                          <input
                            onChange={(e) => handleChange(e)}
                            value={data.state}
                            name="state"
                            type="text"
                            placeholder="State"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </label>
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="block">
                        City
                        <label>
                          <input
                            onChange={(e) => handleChange(e)}
                            value={data.city}
                            name="city"
                            type="text"
                            placeholder="City"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </label>
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="block">
                        Mobile
                        <label>
                          <input
                            onChange={(e) => handleChange(e)}
                            value={data.mobile}
                            name="mobile"
                            type="number"
                            placeholder="Mobile"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </label>
                      </label>
                    </div>

                    <div className="flex">
                      <a href="/login">
                        <button
                          onClick={handleSubmit}
                          className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                        >
                          Create Account
                        </button>
                      </a>
                    </div>
                    <div className="mt-6 text-grey-dark">
                      Already have an account?
                      <a
                        className="text-blue-600 hover:underline"
                        href="/login"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 m-auto w-full">
            <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
              <h3 className="text-2xl font-bold text-center">Log in</h3>
              <div>
                <div className="mt-4">
                  
                  <div className="mt-4">
                    <label className="block">
                      Email
                      <label>
                        <input
                          type="email"
                          placeholder="Email"
                          onChange={(e) => handleChange(e)}
                          value={data.email}
                          name="email"
                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </label>
                    </label>
                  </div>
                  <div className="mt-4">
                    <label className="block">
                      Password
                      <label>
                        <input
                          onChange={(e) => handleChange(e)}
                          value={data.password}
                          name="password"
                          type="Password"
                          placeholder="Password"
                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </label>
                    </label>
                    </div>

                  <div className="flex">
                    
                      <button
                        onClick={handleSubmit}
                        className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                      >
                        Log in
                      </button>
                    
                  </div>
                  <div className="mt-6 text-grey-dark">
                    Don't have an account?
                    <a
                      className="text-blue-600 hover:underline"
                      href="/signup"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Auth;
