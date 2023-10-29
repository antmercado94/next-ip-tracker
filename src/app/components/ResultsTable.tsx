import { useContext } from "react";
import { GeolocationContext } from "@/app/context/GeolocationContext";
import { getTableData } from "@/app/utils/getTableData";

export default function ResultsTable() {
  const { interfaceData } = useContext(GeolocationContext);

  const getIpClass = (ip: string) => {
    // IPv6
    if (ip.length > 15) return "break-words";
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl bg-white p-6 shadow-md sm:w-[39rem] sm:flex-row sm:items-stretch sm:justify-between sm:gap-8 sm:px-6 sm:py-7 md:w-[47rem] md:gap-10 md:px-8 md:py-9 lg:w-[60rem] lg:gap-4 lg:px-8 lg:py-[2.25rem] xl:w-[70rem] xl:gap-8">
      {getTableData(interfaceData).map((col) => (
        <div
          key={col.name}
          className="sm:flex sm:flex-1 sm:gap-4 sm:separators:before:my-[0.4rem] sm:separators:before:border sm:separators:before:border-dark-gray sm:separators:before:opacity-25 sm:separators:before:content-[''] md:gap-6 lg:separators:pr-4 xl:gap-8 xl:separators:pr-8"
        >
          <div className="flex max-w-[13rem] flex-col gap-1 text-center sm:gap-2 sm:text-left xl:gap-3 xs:max-w-none">
            <h2 className="text-[.7rem] font-bold tracking-widest text-dark-gray lg:text-xs xl:text-[.8rem]">
              {col.name.toUpperCase()}
            </h2>
            <h2
              className={`${
                col.name === "ip address" ? getIpClass(col.val) : ""
              } text-xl font-medium text-very-dark-gray sm:max-w-[10rem] lg:max-w-[11rem] lg:text-2xl xl:text-[1.6rem]`}
              dangerouslySetInnerHTML={{
                __html: col.val ? col.val : "null",
              }}
            ></h2>
          </div>
        </div>
      ))}
    </div>
  );
}
