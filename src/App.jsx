import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ProfileMenu from "./ProfileMenu";
import Card from "./Card";

function App() {
  const [activeStatus, setActiveStatus] = useState("All");
  const statuses = ["All", "Active", "Inactive"];

  const userDetails = [
    {
      name: "Kareem",
      role: "1st-Year Student",
      email: "Kareem@microsoft.com",
  
      image:
        "https://img.freepik.com/premium-photo/portrait-smiling-male-teacher-class-elementary-school-looking-camera-with-them-is-backdrop-classroom-background_1125697-54404.jpg?auto=format&fit=crop&w=1480&q=80",
    
       attendance: 72,
      },
    {
      name: "Ismail",
      role: "3rd-Year Student",
      email: "Ismail@microsoft.com",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
   
        attendance: 92,
      },
    {
      name: "Mahendra",
      role: "3rd-Year Student",
      email: "Mahendra@microsoft.com",
      image:
        "https://img.freepik.com/premium-photo/portrait-smiling-male-teacher-class-elementary-school-looking-camera-with-them-is-backdrop-classroom-background_1125697-54404.jpg?auto=format&fit=crop&w=1480&q=80",
        attendance: 98,
      },
    {
      name: "Haider Ali",
      role: "2nd-Year Student",
      email: "Haiderali@microsoft.com",
      image:
        "https://img.freepik.com/free-photo/business-man-curly-cute-handsome-guy-black-suit-close-up-smiling_140725-162638.jpg?t=st=1729505197~exp=1729508797~hmac=239c5c1fd505abb0a38581856c51c8278cd024dd5cae17eb0f4a057975ecb37a&auto=format&fit=crop&w=1480&q=80",
        attendance: 65,
      },
    {
      name: "Adil",
      role: "3rd-Year Student",
      email: "Adil@microsoft.com",
      image:
        "https://img.freepik.com/premium-photo/portrait-smiling-male-teacher-class-elementary-school-looking-camera-with-them-is-backdrop-classroom-background_1125697-54404.jpg?auto=format&fit=crop&w=1480&q=80",
        attendance: 85,
      },
    {
      name: "Chandra Sekhar",
      role: "3rd-Year Student",
      email: "Chandrasekhar@microsoft.com",
      image:
        "https://img.freepik.com/free-photo/business-man-curly-cute-handsome-guy-black-suit-close-up-smiling_140725-162638.jpg?t=st=1729505197~exp=1729508797~hmac=239c5c1fd505abb0a38581856c51c8278cd024dd5cae17eb0f4a057975ecb37a&auto=format&fit=crop&w=1480&q=80",
        attendance: 75,
      },
  ];

  return (
    <div className="bg-gradient-to-br from-[#eee9f4] to-[#c6daf0] h-full items-start py-10">
      {/* first-section searchbar and user-icons */}
      <div className="first-section px-4 md:flex w-full justify-between items-center">
        <div className="search relative">
          {/* Input field with padding to the left to give space for the search icon */}
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full border border-black rounded-md py-2 pl-10 pr-10 shadow-md text-gray-700 outline-none"
          />
          {/* Search Icon */}
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 cursor-pointer" />
        </div>
        <div className="ml-auto py-2 md:py-0">
          <ProfileMenu />
        </div>
      </div>
      {/* first section end */}

      {/* second section start  */}
      <div className="second-section px-4 md:flex w-full justify-between items-center pt-8">
        <div className="title">
          <h1 className="font-bold text-lg">Students</h1>
        </div>
        <div className="status flex ml-auto gap-6 py-2 md:py-0">
          {statuses.map((status) => (
            <div
              key={status}
              className={`status-item cursor-pointer py-1 px-7 rounded-full ${
                activeStatus === status
                  ? "bg-[#a372e8] text-white"
                  : "text-black" // Default color when not active
              }`}
              onClick={() => setActiveStatus(status)}
            >
              <h1>{status}</h1>
            </div>
          ))}
        </div>
      </div>
      {/* second section end  */}

      {/* third section start */}
      <div className="third-section px-4 pt-8">
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userDetails.map((user, index) => (
            <Card key={index} {...user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
