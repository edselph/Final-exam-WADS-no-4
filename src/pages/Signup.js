import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/login')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  
  return (
    <div className="Empty-space">
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="max-w-[700px] mx-auto my-16 p-4">
        <div>
        <h1 className="text-2xl font-bold py-2 text-white">Sign up</h1>
        <p>
            Already have an account? <Link to="/login" className="underline">Login now!</Link>
        </p>
        </div>
        <form onSubmit={handleSubmit}> 
            <div className="flex flex-col py-2 text-white"> 
                <label className="py-2 font-medium">Email Address: </label>
                <input onChange={(e) => setEmail(e.target.value)} className="border p-1 mx-3" type="email" />
            </div>
            <div className="flex flex-col py-2 text-white">
                <label className="py-2 font-medium">Password: </label>
                <input onChange={(e) => setPassword(e.target.value)} className="border p-1 mx-3" type="password" />
            </div>
            {/* <div className="flex flex-col py-2 text-white">
                <label className="py-2 font-medium">Foto KTP dalam bentuk img64 </label>
                <input onChange={(e) => setPassword(e.target.value)} className="border p-1" type="password" />
            </div> */}
            <button className='border-blue-500 bg-blue-600 hover:bg-blue-500 w-full px-3 py-1 my-2 text-black'>Sign Up</button>
        </form>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </div>
    </div>
  )
}

export default Signup