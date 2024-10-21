import React from "react";

function Card({ name, role, email, image }) {
  return (
    <div className="card flex gap-6 bg-[#c8d1e3] py-10 rounded-2xl shadow-md">
      <div className="left">
        <div className="image ml-4">
          <img
            className="w-16 h-16 rounded-full border border-gray-900"
            src={image}
            alt="profile"
          />
        </div>
      </div>
      <div className="right">
        <div className="title">
          <h1 className="font-bold">{name}</h1>
        </div>
        <div className="role">
          <h1 className="text-xs">{role}</h1>
        </div>
        <div className="email pt-4 break-all">
          {" "}
          {/* Added break-all for email wrapping */}
          <h1>
            email: <span className="font-bold">{email}</span>
          </h1>
        </div>

        <div className="buttonSection space-x-4 pt-12">
          <button className="button px-3 py-1 text-gray-800 bg-transparent border border-black rounded-md">
            Block
          </button>
          <button className="button px-3 py-1 text-white bg-black border border-black rounded-md">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
