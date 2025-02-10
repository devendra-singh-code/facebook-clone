import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Login from "./Login";
import { addUser, Posts } from "../store/userSlice";
import MainPage from "./MainPage";
import Navbar from "../component/Navbar";

const Home = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const users = useSelector((state) => state.users);
  const userPosts = useSelector((state) => state.userPosts);
  console.log(userPosts);

  console.log(users);
  const [userSession, setUserSession] = useState("");

  const status = useSelector((state) => state.status);
  const userdata = useSelector((state) => state.userData);
  console.log(status, userdata);

  useEffect(() => {
    localStorage.setItem("facebookUser", JSON.stringify(users));
  }, [users]);

  const userDetail = users.filter((user) => user.email === userSession);
  console.log(userDetail);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("facebookUserLogin");
    if (savedUser) {
      setUserSession(savedUser);
    } else {
      console.log("please login");
    }
  }, []);

  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const handleData = (e) => {
    e.preventDefault();
    const data = {
      title,
      post,
      userSession,
    };
    console.log("post data :", data);
    console.log(userdata);
    disptach(Posts(data));

    // disptach(addUser(users.filter((user) => user.email === userSession ? {...user, data}: user)))
    // const userPost = users.filter((user) => user.email === userSession ? {...user, data}: user)
  };

  return (
    <>
      {userSession ? (
        // <div>
        // <div>
        //   i am logged in  {userDetail[0].firstName} <br /> <button onClick={logout} className="bg-gray-500">Logout</button>
        // </div>
        // <form onSubmit={handleData}>
        //   <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        //   <input type="text" placeholder="post" value={post} onChange={(e) => setPost(e.target.value)}/>
        //   <button>Submit</button>
        // </form>
        // </div>
        <div className="w-full border border-black">
          <Navbar />
          <Outlet />
          <button onClick={logout} className="bg-gray-500">
            Logout
          </button>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
