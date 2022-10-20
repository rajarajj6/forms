import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]:e.target.value,
    });
  };
  const submitHandler = (e) => {    
    e.preventDefault()
    console.log(values);
  };

  return (
    <form>
    <div className="flex justify-center items-center h-screen bg-neutral-200">
      <div className="shadow-2xl box-content w-92 px-5 py-8 border-3 rounded-3xl bg-neutral-100">
        <div>
          <h1 className="font-mono text-xl">Email</h1>
          <Input
            className="border-2 border-slate-300 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
            type="email"
            placeholder="Enter username"
            value={values.email}
            onChange={changeHandler}
            name="email"
          />

          <h1 className="font-mono text-xl">password</h1>
          <Input
            className="border-2 border-slate-300 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
            type="password"
            placeholder="Enter password"
            value={values.password}
            onChange={changeHandler}
            name="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          />

          <div className="pr-72 pt-3">
            <button
              className="bg-indigo-400 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              onClick={submitHandler}
            >
              Login
            </button>
          </div>
          <div className="pr-24 pl-24 pt-3">
            <h3>
              don't have account {""}    
              <Link to="/Signup" className="text-red-500"> 
                register
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};
export default Login;
