"use client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Button } from "../../ui/button";
import { CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Dispatch, SetStateAction } from "react";
import { PlaceType } from "@/app/place/upload/page";

const SearchResults = ({
  isCoordLoading,
  addresses,
  setPlaceInfo,
  clickModal,
}: {
  isCoordLoading: boolean;
  addresses: PlaceType[];
  setPlaceInfo: Dispatch<SetStateAction<PlaceType>>;
  clickModal: () => void;
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
              className="w-full justify-start text-sm px-2"
              variant={"outline"}
              onClick={() => {
                setPlaceInfo(address);
                clickModal();
              }}>
              {address?.roadAddress}
            </Button>
          ))
        )}
      </CardContent>
    </div>
  );
};

export default SearchResults;
