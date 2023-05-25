import React, { useState, useEffect } from "react";
import axios from "axios";
import { getData } from "../../services/api";
import endPoints from "../../services/endpoints";
import { Spinner } from "../../component/Loader";

const ReadingPage = () => {
  const [readingUrls, setReadingUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData(endPoints.READING_lIST ,(data)=>{
      setReadingUrls(data.reading_list)
      setIsLoading(false)
    })
  }, []);

  return (
    <>
      <div className="w-10/12 m-auto">
        <h1 className="text-4xl">My Reading List</h1>
        <p>
          This is what <a className="text-sky-700 border-b border-sky-700" href="https://www.spudooli.com/">I'm</a> currently
          reading
        </p>
        {!isLoading ? <div className="border-2 flex flex-col mt-4">
          {readingUrls?.map((item, index) => {
            return (
              <a className={`text-sky-700 text-base border-b border-0 no-underline p-2 ${index % 2 == 0 ? 'bg-slate-200' : 'bg-white'} hover:bg-sky-700 hover:text-white `} href={item[2]} key={item[0]}>
                {item[1]}
              </a>
            );
          })}
        </div> : 
        <div className="absolute left-1/2 top-1/2">
          <Spinner />
        </div>
        }
      </div>
    </>
  );
};

export default ReadingPage;
