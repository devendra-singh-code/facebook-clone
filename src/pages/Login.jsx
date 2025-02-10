import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/userSlice";

const Login = () => {
  // const [user, setUser] = useState(useSelector((state) => state.users));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const userData1 = useSelector((state) => state.userData);

  // useEffect(() => {
  //   localStorage.setItem("facebookUser", JSON.stringify(user));
  // }, [user]);

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("facebookUser"))
  //   if(user && user.length > 0){
  //     setUser(user)
  //   }
  // },[])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLoginHandle = (e) => {
    e.preventDefault()
    if(email === ""){
      alert("please enter email")
      return
    }
    if(password === ""){
      alert("please enter password")
    }
    console.log("user data is here")
    const userData = user.filter((user) => user.email === email && user.password === password)
    console.log(userData)
    if(userData.length !== 0){
      console.log(userData[0])
      dispatch(login(userData))
      sessionStorage.setItem("facebookUserLogin", userData[0].email);
      navigate('/')
    }else{
    alert("username and password doest match");
    }
  }

  return (
    <div className="bg-[#f2f4f7]">
      <div className="flex md:flex-row flex-col items-center md:justify-center justify-start  h-screen w-full px-3 gap-5">
        <div className="max-w-[500px]  md:relative flex flex-col justify-center items-center">
          <img
            src={assets.facebook}
            alt=""
            className="md:w-[350px] w-[250px] md:absolute bottom-12 -left-8"
          />
          <p className="md:text-[28px] text-[18px] leading-tight font-[400] text-center md:text-left">
            Facebook helps you connect and share with the people in your life
          </p>
        </div>
        <div className="max-w-[450px] w-full">
          <div className=" border border-gray-300 p-5 rounded-md bg-white mb-2 ">
            <form onSubmit={userLoginHandle} className="flex flex-col gap-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address or phone number"
                className="p-3 border border-gray-300 rounded-md focus:outline-[#0866ff]"
                autoFocus
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="p-3 border border-gray-300 rounded-md focus:outline-[#0866ff]"
              />
              <button className="bg-[#0866ff] p-3 rounded-md text-white cursor-pointer text-xl border-none outline-none">
                Log in
              </button>
            </form>
            <p className="text-center p-3 border-b-2 border-gray-200 text-[#0866ff] font-semibold cursor-pointer mb-4">
              <Link to="forgetpassword">Forgotten password?</Link>
            </p>
            <div className=" w-full flex  justify-center">
              <button className="bg-[#42b72a] py-2 px-4 cursor-pointer rounded-lg text-white">
                <Link to="/signup">Create new account</Link>
              </button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              <span className="text-black font-semibold cursor-pointer">
                Create a Page
              </span>{" "}
              for a celebrity, brand or business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
