import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import endPoints from "../../services/endpoints";
import { api } from "../../services/api";
import { ACCESS_TOKEN_KEY } from "../../services/constant";
import { AuthContext } from "../../routes";
import { Navigate, useNavigate } from "react-router-dom";
import TextInput from "../../component/TextInput";
import { ErrorAlert } from "../../component/Alerts";


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [isLoading, setLoading] = useState(false)
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const login = () => {
    setLoading(true)
    setErrors({})
    let errors = {}

    if (!username) {
      errors["username"] = "username is required";
    }
    if (!password) {
      errors["password"] = "password is required";
    }


    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      setLoading(false)
      return;
    }
    return api
      .post(`${endPoints.AUTH_LOGIN}`, { username, password })
      .then((res) => res.data)
      .then((data) => {
        if (data.details?.access_token) {
          localStorage.setItem(ACCESS_TOKEN_KEY, data.details?.access_token);
          auth.setIsLogin(true)
          navigate('/feed-admin')
          setLoading(false)
          return data;
        }
        if (data.error) {
          setFormError(data.message)
          setLoading(false)
        }
      })
      .catch((error) => {
        setLoading(false)
        throw error;
      });
  };

  // useEffect(() => {
  //   if (formError) {
  //     setTimeout(() => {
  //       setFormError("")
  //     }, 3000)
  //   }
  // }, [formError])



  if(!localStorage.getItem(ACCESS_TOKEN_KEY)){return (
    <>
      <div className="flex flex-col justify-center overflow-hidden w-10/12 m-auto mt-24">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          {formError && <div className="mb-4">
            <ErrorAlert error={formError} />
          </div>}
          <h1 className="text-3xl font-semibold text-center text-sky-700">
            Sign in
          </h1>
          <form onSubmit={e => e.preventDefault()}>
            <div className="mb-2">
              <TextInput
                label='username'
                value={username}
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                error={errors.username}
                onFocus={() =>
                  {setErrors({ ...errors, username: null })
                  setFormError('')}
                }
              />
            </div>
            <div className="mb-2">
              <TextInput
                label="password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                onFocus={() =>
                  {setErrors({ ...errors, password: null })
                  setFormError('')}
                }
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
  )}else{
    Navigate({to:'/read'})
  }
}
export default Login;
