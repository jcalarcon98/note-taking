import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-purple-700">
      <div className="lg:w-96 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-6 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-4">
          Login
        </h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center lg:flex-col">
          <button className="w-full text-white bg-purple-800 border-0 py-2 focus:outline-none hover:bg-purple-600 rounded md:w-1/4 lg:w-full">
            Login
          </button>

          <button className="w-full mt-2 flex flex-row items-center justify-center py-2 text-white focus:outline-none bg-purple-400 rounded hover:bg-purple-800 md:mt-0 md:ml-2 lg:w-full lg:mt-2 lg:ml-0">
            <AiOutlineGoogle className="mr-2" /> Login with google
          </button>
        </div>

        <hr className='border rounded-lg mt-2 border-solid border-purple-700'/>

        <Link 
          className="text-center text-xs text-gray-500 mt-3 hover:underline"
          to='/auth/register'>
          Create new account?
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
