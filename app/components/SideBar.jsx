import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="w-80 h-screen bg-blue-400">
      {/* <h2>sidebar</h2> */}
      <div className="flex items-center justify-center p-10">
        <Link href="/home">
          <img src="./logo.png" alt="" srcset="" />
        </Link>
        <Link href="/home">
          <img src="./menu.png" alt="" srcset="" />
        </Link>
      </div>
      <div className="options flex flex-col mt-10">
        <Link href="/dashboard" className="item flex justify-center  mb-4">
          <img className="mr-5" src="./icon/dashbaord-i.png" alt="" srcset="" />
          <span className="text-white">Dashboard</span>
        </Link>
        <Link href="/course" className="item flex justify-center mb-4">
          <img className="mr-5" src="./icon/course.png" alt="" srcset="" />
          <span className="text-white">Course</span>
        </Link>
        <Link href="/account" className="item flex justify-center  mb-4">
          <img className="mr-5" src="./icon/user.png" alt="" srcset="" />
          <span className="text-white">Account</span>{" "}
        </Link>
        <Link href="/logout" className="item flex justify-center  mb-4">
          <img className="mr-5" src="./icon/logout.png" alt="" srcset="" />
          <span className="text-white">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
