"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../ui/input";
import CoordSearchForm from "./UploadCoord/CoordSearchForm";
import CoordSearchResult from "./UploadCoord/CoordSearchResult";
import { Card } from "../ui/card";
import { PlaceType } from "@/app/place/upload/page";
import { IoIosCloseCircleOutline } from "react-icons/io";

const UploadCoord = ({
  placeInfo,
  setPlaceInfo,
}: {
  placeInfo: PlaceType;
  setPlaceInfo: Dispatch<SetStateAction<PlaceType>>;
}) => {
  const [isModal, setIsModal] = useState(false);
  const [isCoordLoading, setIsCoordLoading] = useState(false);
  const [addresses, setAddresses] = useState<PlaceType[]>([]);

  const clickModal = () => {
    setIsModal((prev) => !prev);
  };
  return (
    <div className="my-2">
      <span className="font-semibold">위치</span>
      <Input
        placeholder="주소를 입력하세요"
        value={placeInfo?.roadAddress}
        onClick={clickModal}
        readOnly
      />
      {isModal ? (
        <div
          className="top-0 left-0 bg-white bg-opacity-50 absolute w-screen h-screen flex justify-center items-center z-10"
          onClick={clickModal}>
          <Card
            className="w-[400px] bg-white border-2 rounded-xl relative pt-2"
            onClick={(event) => {
              event.stopPropagation();
            }}>
            <IoIosCloseCircleOutline
              className="hover:text-green-600 transition-colors hover:cursor-pointer absolute top-3 right-3"
              size={27}
              onClick={clickModal}
            />
            <CoordSearchForm
              setAddresses={setAddresses}
              setIsCoordLoading={setIsCoordLoading}
            />
            <CoordSearchResult
              isCoordLoading={isCoordLoading}
              addresses={addresses}
              clickModal={clickModal}
              setPlaceInfo={setPlaceInfo}
            />
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default UploadCoord;
