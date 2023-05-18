import React, { useState, useContext } from "react";
import axios from "axios";
import endPoints from "../../services/endpoints";
import { api } from "../../services/api";
import { ACCESS_TOKEN_KEY } from "../../services/constant";
import { AuthContext } from "../../routes";
import { useNavigate } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading , setLoading] = useState(false)
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const login = () =>{
    setLoading(true)
    return api
      .post(`${endPoints.AUTH_LOGIN}`, { username, password})
      .then((res) => res.data)
      .then((data) => {
        localStorage.setItem(ACCESS_TOKEN_KEY, data.details.access_token);
        auth.setIsLogin(true)
        navigate('/feed-admin')
        setLoading(false)
        return data;
      })
      .catch((error) => {
        throw error;
      });
  };





  return (
    <>
      <div className="flex flex-col justify-center overflow-hidden mt-24">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-sky-700">
            Sign in
          </h1>
          <form onSubmit={e => e.preventDefault()}>
            <div className="mb-2">
              <label
                for="email"
                className="block text-md font-semibold text-sky-700"
              >
                Email
              </label>
              <input
                value={username}
                type="email"
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label

                for="password"
                className="block text-md font-semibold text-sky-700"
              >
                Password
              </label>
              <input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-700 rounded-md" onClick={login}>
                {!isLoading ? 'Login' : 'Loading...'}
              </button>
            </div>
          </form>


        </div>
      </div>
    </>
  );
}
export default Login;
