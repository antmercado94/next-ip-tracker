"use client";

import { createContext, useState } from "react";
import useSWR from "swr";
import fetcher from "@/app/utils/fetcher";
import { dummyData } from "@/data/dummy";
import { GeoLocationData } from "@/models/GeoLocation";
import { UserInputError } from "@/lib/exceptions";

interface Props {
  children: React.ReactNode;
  clientData: GeoLocationData;
}

export interface GeolocationInterface {
  interfaceData: GeoLocationData;
  isDummyData: boolean;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (term: string) => void;
  isError: boolean;
  isLoading: boolean;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const initialState = {
  interfaceData: dummyData,
  isDummyData: false,
  errorMsg: "",
  setErrorMsg: () => "",
  handleSearch: () => null,
  isError: false,
  isLoading: false,
  input: "",
  setInput: () => "",
};

export const GeolocationContext =
  createContext<GeolocationInterface>(initialState);

const GeolocationProvider: React.FC<Props> = ({ children, clientData }) => {
  const [search, setSearch] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const isDummyData = !!clientData["dummy"];

  const {
    isLoading,
    error,
    data: interfaceData,
  } = useSWR(
    shouldFetch ? `/api/geolocation?search=${search}` : null,
    fetcher,
    {
      fallbackData: clientData,
      shouldRetryOnError: false,
      keepPreviousData: true,
      revalidateOnFocus: false,
      onError: (e) => {
        setErrorMsg(e.message);
      },
      onSuccess: () => {
        setInput("");
      },
    },
  );

  const handleSearch = (term: string) => {
    if (!term || term === search) return;
    errorMsg && setErrorMsg("");
    setSearch(term);
    setShouldFetch(true);
  };

  return (
    <GeolocationContext.Provider
      value={{
        interfaceData: interfaceData as GeoLocationData,
        isDummyData,
        errorMsg,
        setErrorMsg,
        handleSearch,
        isError: error instanceof UserInputError,
        isLoading,
        input,
        setInput,
      }}
    >
      {children}
    </GeolocationContext.Provider>
  );
};

export default GeolocationProvider;
