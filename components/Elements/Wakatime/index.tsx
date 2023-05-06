import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import LanguageProgress from "./LanguageProgress";
import Total from "./Total";

export default function WakaTime() {
  const [data, setData] = useState<WakaTimeData>();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/stats/wakatime");
      const data = res.data.data as WakaTimeData;

      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full h-[34rem] md:h-[22rem] bg-base-100 shadow-lg shadow-base-300 p-8 rounded-2xl transition-all duration-75 cursor-default font-extra lowercase">
      {data ? (
        <>
          <div className="flex flex-row items-center h-6 gap-4">
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Coding Activity</p>
              <p className="text-base italic">Last 7 days</p>
            </div>
          </div>
          <div className="divider" />
          <div className="flex flex-col md:flex-row items-center w-full md:h-full md:w-auto">
            <div className="flex flex-col justify-center items-center w-full md:h-full md:w-auto">
              <Total title="Total" time={data.total} />
              <div className="py-3 md:divider md:py-0" />
              <Total title="Daily average" time={data.dailyAverage} />
            </div>
            <div className="divider md:divider-horizontal" />
            <div className="flex flex-col w-full gap-1">
              <p className="text-base font-semibold">Most used languages</p>
              {data.languages.map((language, index) => (
                <LanguageProgress key={index} {...language} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <Image src="/static/images/gifs/dogs.gif" alt="Loading" width="150" height="150" />
        </div>
      )}
    </div>
  );
}
