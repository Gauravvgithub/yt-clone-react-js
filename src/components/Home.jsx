import React from "react";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video.jsx";
import { useAuth } from "../context/AuthProvider.jsx";
import ListItems from "./ListItems.jsx";

function Home() {
  const { data, loading } = useAuth();
  
  return (
    <div className="flex mt-20">
      {!loading && <Sidebar />}
      {!loading && <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
      {!loading && <ListItems />}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {data
              .filter((item) => item.type === "video")
              .map((item, index) => (
                <Video key={index} video={item?.video} />
              ))}
          </div>
        )}
      </div>}
    </div>
  );
}

export default Home