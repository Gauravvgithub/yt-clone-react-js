import React from "react";

const Loading = () => {
  return (
    <div>
      <span className="flex items-center justify-center h-screen">
        <div
          className="spinner-border text-red-600"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        ></div>
      </span>
    </div>
  );
};

export default Loading;
