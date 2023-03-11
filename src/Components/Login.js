import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save token to local storage
    localStorage.setItem("token", Math.random().toString(36).substring(2));

    // Redirect to dashboard page using navigate object
    navigate('/Dashboard');
  };
  return (
    <div className=" h-screen flex justify-center items-center text-center">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center rounded-[18px] border border-black h-[363px] w-[342px] shadow-xl">
        <input type="email" id="email-input" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-black px-[20px] text-gray-600 font-Inter font-[20px] font-semibold rounded-lg  w-[276px] h-[51px] placeholder-[#6F6F6F]" placeholder='Email'></input>
        <input type="password" id="password-input" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-[20px] border border-black px-[20px] text-gray-600 font-Inter font-[20px] font-semibold rounded-lg w-[276px] h-[51px] placeholder-[#6F6F6F]" placeholder='Password'></input>
        <p className="w-[264px] h-[21px] mt-[5px] leading-[21px] font-Inter font-medium text-[#5300A7] text-[14px]">Don't have an account? Sinup instead</p>
        <button className="pt-2.5 pr-5 pb-2.5 pl-5 mt-[2px] w-[276px] h-[44px] bg-black text-white rounded-md font-Inter font-medium font-[16px]" type="submit" >Submit</button>
        <h2 className="w-[29px] h-[20px] mt-[10px] font-Inter font-[20px] text-center font-semibold text-md">OR</h2>
        <button className="flex flex-row pt-2.5 pr-5 pb-2.5 pl-5 mt-[10px] justify-center items-center gap-[10px] w-[276px] h-[47.55px] bg-[#C95252] text-white rounded-md">
          <img className="h-[27.55] w-[29px]" src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png" alt="Google logo png icon free download @transparentpng.com" />
          <p className="w-[139px] h-[24px] font-Inter font-medium font-[16px]">Login with Google</p>
        </button>
      </form>
    </div>
  );
}
