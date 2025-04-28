import React, { useEffect, useState } from "react";
import '../components/Sidebar.css'

import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";

import logo from "../assets/logo.png";
import profile from "../assets/user_logo.png";
import { Link, useNavigate } from "react-router";
import { useUtils } from "../context/UtilsContext";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
  
  useEffect(()=>{
    // console.log({isSidebar, mobileShow})
  },[isSidebar])

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    }
    setIsSidebar(!isSidebar);
  };

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 ">
      <div className="flex items-center space-x-4  ">
        <AiOutlineMenu
          className="text-xl cursor-pointer threelines"
          onClick={handleSidebar}
        />
        <Link to={'/'}><img src={`${logo}`} alt="Youtube" style={{color:"red"}} className="w-28 cursor-pointer ytlogo" /></Link>
      </div>
      <div className="flex w-[35%] items-center searchBox">
        <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full ">
          <input
            type="text"
            placeholder="Search"
            className=" outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"}  />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200 mic"
        />
      </div>
      <div className="flex  space-x-5 items-center ">
        <RiVideoAddLine className="text-2xl addvideo" />
        <AiOutlineBell className="text-2xl bell" />
        <img src={profile} className="w-6 rounded-full" />
      </div>
    </div>
  );
}

export default Navbar;
