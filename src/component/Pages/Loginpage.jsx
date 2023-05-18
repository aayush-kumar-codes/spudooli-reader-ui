import React, {useState} from "react";
import axios from "axios";


function LoginPage() {
  const [sign, setSign] = useState([])
  const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
  const Fetchdata = async () => {
    
    const data = {
      username,password
      };
      
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
     await  axios.post('http://65.108.77.50:5008/auth/login', data, config)
        .then(response => {
          setSign(response.data)
          console.log(response, '==============>');
        })
        .catch(error => {
            console.error(error)
        })};

    
    
    

  return (
    <>
      <div className="relative  flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
          </h1>
          <form onSubmit={e=>e.preventDefault()} className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-md font-semibold text-gray-800"
              >
                Email
              </label>
              <input
              value={username}
                type="email"
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
              
                for="password"
                className="block text-md font-semibold text-gray-800"
              >
                Password
              </label>
              <input
              value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
           
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={Fetchdata}>
                Login
              </button>
            </div>
          </form>

          
        </div>
      </div>
    </>
  );
}
export default LoginPage;
