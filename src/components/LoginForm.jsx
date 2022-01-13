import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/auth";
import { setMessage, clearMessage } from "../redux/actions/message";
import {useNavigate} from 'react-router-dom'
import { isValidNumber } from "../utils/validateForm";

function LoginForm() {
  const [inputVal, setinputVal] = useState();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  console.log(isLoggedIn, message);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setinputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = isValidNumber(inputVal);
    // console.log(error, inputVal);
    if(error){
        dispatch(setMessage(error))
    }
    if(!error) {
        dispatch(login(inputVal))
          .then(() => {
            dispatch(clearMessage());
            navigate('/', { replace: true })
          })
          .catch(() => {});
    }
  };

  return (
    <div>
      <div className="m-auto mt-40 w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-10 mt-10">
            <h3 className="block text-gray-700 text-sm font-bold mb-10 text-center text-xl">Login Form</h3>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Enter Number
            </label>
            {message ? 
            <input
              onChange={inputHandler}
              value={inputVal}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="8838XXXXXX"
            /> :
            <input
              onChange={inputHandler}
              value={inputVal}
              className="shadow appearance-none bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="8838XXXXXX"
            />
            }
            { message &&
            <p className="text-red-500 text-sm font-bold">
              {message}
            </p>
}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 shadow-lg shadow-indigo-500/50 text-white font-bold py-2 px-6 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <a
              className="cursor-pointer inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-900"
              href={() => {}}
            >
              Error Login?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
