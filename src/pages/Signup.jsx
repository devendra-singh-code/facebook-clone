import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [gender, setGender] = useState("");
  const [customGender, setCustomGender] = useState("");

  // Generate days (1-31)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // Month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate years (1900 - 2050)
  const years = Array.from({ length: 151 }, (_, i) => 1900 + i);

  const loginHandle = (e) => {
    e.preventDefault();
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      gender === "" ||
      day === "" ||
      month === "" ||
      year === ""
    ) {
      alert("please fill all field");
    } else {
      const userDatas = {
        id: nanoid(),
        password,
        email,
        firstName,
        lastName,
        gender,
        day,
        month,
        year,
      };
      console.log(userDatas)
      dispatch(addUser(userDatas));
      navigate("/");
    }
  };

  return (
    <div className="bg-[#f2f4f7]">
      <div className="flex items-center justify-center w-full h-screen flex-col ">
        <img src={assets.facebook} alt="" className="w-[250px]" />
        <form
          onSubmit={loginHandle}
          className="max-w-[420px] flex flex-col border border-gray-300 p-5 bg-white rounded-sm"
        >
          <p className="text-center font-semibold text-2xl">
            Create a new account
          </p>
          <p className="text-center text-[12px] mb-2 text-gray-500">
            Its's quick and easy
          </p>
          <div className="my-2 flex items-center justify-center gap-2">
            <input
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              type="text"
              placeholder="First name"
              className="border border-gray-400 px-2 py-1 rounded-sm placeholder:text-sm focus:outline-[#0866ff] focus:outline-1 w-full"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last name"
              className="border border-gray-400 px-2 py-1 rounded-sm placeholder:text-sm focus:outline-[#0866ff] focus:outline-1 w-full"
            />
          </div>

          <div className="pb-2">
            <p className="text-[12px]">Date of birth</p>
            <div className="w-full flex  gap-2 items-center justify-center">
              {/* Day Dropdown */}
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full border border-gray-400 px-2 py-1 rounded-sm placeholder:text-sm focus:outline-[#5393fc]"
              >
                <option value="">Day</option>
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              {/* Month Dropdown */}
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full border border-gray-400 px-2 py-1 rounded-sm placeholder:text-sm focus:outline-[#5393fc]"
              >
                <option value="">Month</option>
                {months.map((m, index) => (
                  <option key={index} value={m}>
                    {m}
                  </option>
                ))}
              </select>

              {/* Year Dropdown */}
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full border border-gray-400 px-2 py-1 rounded-sm placeholder:text-sm focus:outline-[#5393fc]"
              >
                <option value="">Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full flex justify-center items-center gap-2 mb-2">
            {/* Male Radio */}

            <label className="w-full flex gap-2 border border-gray-400 px-2 py-1 rounded-sm placeholder:text-sm focus:outline-[#5393fc]">
              <input
                type="radio"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <p className="text-sm">Male</p>
            </label>

            {/* Female Radio */}
            <label className="w-full flex gap-2 border border-gray-400 px-2 py-1 rounded-sm placeholder:text-sm focus:outline-[#5393fc]">
              <input
                type="radio"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <p className="text-sm">Female</p>
            </label>

            {/* Custom Gender Radio */}
            <label className="w-full flex gap-2 border border-gray-400 px-2 py-1 rounded-sm placeholder:text-sm focus:outline-[#5393fc]">
              <input
                type="radio"
                value="Custom"
                checked={gender === "Custom"}
                onChange={(e) => setGender(e.target.value)}
              />
              <p className="text-sm">Custom</p>
            </label>
          </div>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Mobile number or email address"
            className="border border-gray-400 px-2 py-1 rounded-sm placeholder:text-sm focus:outline-[#0866ff] focus:outline-1 mb-2"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="New password"
            className="border border-gray-400 px-2 py-1 rounded-sm placeholder:text-sm focus:outline-[#0866ff] focus:outline-1 mb-2"
          />

          <p className="text-[12px] leading-tight text-gray-500 mb-2">
            People who use our service may have uploaded your contact
            information to Facebook.{" "}
            <span className="text-[#0866ff]">Learn more.</span>
          </p>
          <p className="text-[12px] leading-tight text-gray-500 mb-3">
            By clicking Sign Up, you agree to our{" "}
            <span className="text-[#0866ff]">Terms, Privacy Policy</span> and
            <span className="text-[#0866ff]">Cookies Policy.</span> You may
            receive SMS notifications from us and can opt out at any time.
          </p>
          <button className="bg-[#3e992c] py-2 px-4 cursor-pointer rounded-lg font-semibold text-white">
            Sign Up
          </button>
          <p
            onClick={() => navigate("/")}
            className="text-[#0866ff] text-center font-semibold cursor-pointer mt-4"
          >
            Already have an account?
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
