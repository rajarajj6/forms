import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../Input";
import { signup } from "../Slice";
import store from "../store";

const Signup = () => {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password1: "",
    password2: "",
  });


  const changeHandler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    
    if(inputValues.password1!==inputValues.password2) {
      console.log("passwords do not match")
      return;
    }

    const dbCheck=JSON.parse(localStorage.getItem("user"));
    const usersCount = dbCheck===null?1:(dbCheck.length)+1;


    dispatch(
      signup({
        firstname:inputValues.firstname,
        lastname:inputValues.lastname,
        email:inputValues.email,
        password1:inputValues.password1,
        password2:inputValues.password2,
        id:usersCount
      })
    );

    const stateData=store.getState();
    const userDetails=stateData.user.details;

    const arr=[];

    if(dbCheck===null||dbCheck.every((elm)=>elm.email!==inputValues.email)){
      arr.push(userDetails);
      localStorage.setItem("user",JSON.stringify(arr));
    }else{
      alert("user aleady have account");
      return;
    }

  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex justify-center items-center h-screen bg-neutral-200">
        <div className="shadow-2xl box-content w-96 px-5 py-5 border-3 rounded-3xl bg-neutral-100">
          <div className="w-11/12 pl-6">
            <h1 className="font-mono text-xl">First Name</h1>
            <Input
              className="border-2 border-slate-300 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-black-300"
              type="text"
              name="firstname"
              placeholder="First Name"
              value={inputValues.firstname}
              onChange={changeHandler}
            />
            <h1 className="font-mono text-xl pt-2">Last Name</h1>
            <Input
              className="border-2 border-slate-300 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={inputValues.lastname}
              onChange={changeHandler}
            />
            <h1 className="font-mono text-xl pt-2">Email</h1>
            <Input
              className="border-2 border-slate-300 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
              type="email"
              name="email"
              placeholder="Email"
              value={inputValues.email}
              onChange={changeHandler}
            />
            <h1 className="font-mono text-xl pt-2">password</h1>
            <Input
              className="border-2 border-slate-300 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
              type="password"
              name="password1"
              placeholder="Password"
              value={inputValues.password1}
              onChange={changeHandler}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            />
            <h1 className="font-mono text-xl pt-2">confirm password</h1>
            <Input
              className="border-2 border-slate-300 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
              type="password"
              name="password2"
              placeholder="confirm Password"
              value={inputValues.password2}
              onChange={changeHandler}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            />
            <h1 className="font-mono text-xl pt-2">Date</h1>
            <Input
              className="border-2 border-slate-300 w-1/2 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300"
              type="Date"
              name="Date"
              value={inputValues.date}
              onChange={changeHandler}
            />
            <div className="pt-2">
              <Input
                className="border-2 border-slate-300 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                type="checkbox"
                name="checkbox"
              />{" "}
              I agree terms and conditions
            </div>
            <div className="pl-14 pr-14 pt-2">
              <button
                className="bg-indigo-400 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                type="submit"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Signup;
