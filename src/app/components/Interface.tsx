"use client";

import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { DefaultError } from "@/lib/exceptions";
import { GeolocationContext } from "@/app/context/GeolocationContext";
import { LoadingSpinner } from "@/app/components/LoadingSpinner";
import SearchInput from "@/app/components/SearchInput";
import ResultsTable from "@/app/components/ResultsTable";

const LazyMap = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[inherit] items-center justify-center">
      <LoadingSpinner />
    </div>
  ),
});

export default function Interface() {
  const { isDummyData, errorMsg } = useContext(GeolocationContext);

  useEffect(() => {
    if (isDummyData) {
      toast.error(new DefaultError().message, {
        duration: 5000,
        id: "error1",
      });
    }
  }, [isDummyData]);

  useEffect(() => {
    if (!errorMsg) return;
    toast.error(errorMsg, {
      duration: 5000,
      id: "error2",
    });
  }, [errorMsg]);

  return (
    <section className="min-h-[calc(100vh-20rem)] bg-slate-500 sm:min-h-[calc(100vh-17.15rem)] md:min-h-[calc(100vh-17.65rem)] lg:min-h-[calc(100vh-17.75rem)] custom-height-mq:min-h-[22rem]">
      <LazyMap />
      <div className="absolute left-0 right-0 top-0 z-[99999] mx-6 flex flex-col items-center gap-[1.6rem] pt-[1.5rem] sm:mx-auto sm:max-w-min sm:pt-8 lg:max-w-fit">
        <div>
          <h1 className="text-[1.6rem] font-medium text-white sm:text-3xl md:text-[2rem]">
            IP Address Tracker
          </h1>
        </div>
        <SearchInput />
        <ResultsTable />
        <Toaster toastOptions={{ position: "top-right" }} />
      </div>
    </section>
  );
}
