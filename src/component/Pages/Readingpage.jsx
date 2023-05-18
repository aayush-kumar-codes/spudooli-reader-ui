import React, { useState, useEffect } from "react";
import axios from "axios";

const Readingpage = () => {
  const [readingUrls, setReadingUrls] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await axios.get("http://65.108.77.50:5008/api/readinglist");
    if (data.status === 200) {
      setReadingUrls(data.data.reading_list);
    }
  };

  return (
    <>
      <div className="text-center mt-[6%]">
        <h1 className="text-4xl">My Reading List</h1>
        <p>
          This is what <span className="text-blue-500 border-b border-blue-500">I'm</span> currently
          reading
        </p>

        {readingUrls?.map((item) => {
          return (
            <div className="m-auto text-center mt-1  ">
              <a className="text-blue-500 border-b border-blue-500 " href={item[2]} key={item[0]}>
                {item[1]}
              </a>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Readingpage;
