"use client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Dispatch, SetStateAction } from "react";

const SearchResults = ({
  isCoordLoading,
  addresses,
  setdAddressSelected,
}: {
  isCoordLoading: boolean;
  addresses: string[];
  setdAddressSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="h-[360px]">
      <CardHeader>
        <CardTitle className="text-sm">주소 목록</CardTitle>
      </CardHeader>
      <CardContent>
        {isCoordLoading ? (
          <div className="flex justify-center">
            <AiOutlineLoading3Quarters className="animate-spin" />
          </div>
        ) : addresses?.length === 0 ? (
          <div>정확한 주소를 입력하세요.</div>
        ) : (
          addresses?.map((address, index) => (
            <Button
              key={index}
              className="w-full justify-start text-sm"
              variant={"outline"}
              onClick={() => setdAddressSelected(address)}>
              {address.roadAddress}
            </Button>
          ))
        )}
      </CardContent>
    </div>
  );
};

export default SearchResults;
