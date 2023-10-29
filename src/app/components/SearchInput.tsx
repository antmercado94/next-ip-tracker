"use client";

import { FormEvent, useContext } from "react";
import Image from "next/image";
import arrowIcon from "@/public/icon-arrow.svg";
import { GeolocationContext } from "@/app/context/GeolocationContext";
import { LoadingSpinner } from "@/app/components/LoadingSpinner";

export default function SearchInput() {
  const { handleSearch, isError, isLoading, input, setInput } =
    useContext(GeolocationContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    handleSearch(input);
  };

  return (
    <form
      className="mt-[.2rem] flex w-full shadow-sm sm:mb-5 sm:max-w-[26rem] md:max-w-[28rem] lg:max-w-[30rem] xl:max-w-[35rem]"
      onSubmit={handleSubmit}
    >
      <input
        className={`w-full rounded-2xl rounded-r-none px-3 py-4 pl-6 text-lg text-very-dark-gray${
          isError
            ? " bg-red-100 outline outline-1 outline-red-500 placeholder:text-red-300"
            : ""
        }`}
        type="text"
        name="searchInput"
        placeholder="Search for any IP address or domain"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="flex basis-[4.25rem] items-center justify-center rounded-2xl rounded-l-none bg-black hover:bg-very-dark-gray"
      >
        {!isLoading ? (
          <Image priority src={arrowIcon} alt="Arrow Icon" />
        ) : (
          <LoadingSpinner />
        )}
      </button>
    </form>
  );
}
