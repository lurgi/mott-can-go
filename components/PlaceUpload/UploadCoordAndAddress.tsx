"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../ui/input";
import CoordSearchForm from "./UploadCoord/CoordSearchForm";
import CoordSearchResult from "./UploadCoord/CoordSearchResult";
import { Card } from "../ui/card";

const UploadCoordAndAddress = ({
  placeCoord,
  setPlaceCoord,
}: {
  placeCoord: number[];
  setPlaceCoord: Dispatch<SetStateAction<number[]>>;
}) => {
  const [isModal, setIsModal] = useState(false);
  const [isCoordLoading, setIsCoordLoading] = useState(false);
  const [addresses, setAddresses] = useState<string[]>([]);
  const [addressSelected, setdAddressSelected] = useState<string>("");

  const clickModal = () => {
    setIsModal((prev) => !prev);
  };
  return (
    <div className="my-2">
      <span className="font-semibold">위치</span>
      <Input placeholder="주소를 입력하세요" onClick={clickModal} readOnly />
      {isModal ? (
        <div
          className="top-0 left-0 bg-white bg-opacity-50 absolute w-screen h-screen flex justify-center items-center"
          onClick={clickModal}>
          <Card className="w-96 bg-white border-2 rounded-xl">
            <CoordSearchForm
              setAddresses={setAddresses}
              setIsCoordLoading={setIsCoordLoading}
            />
            <CoordSearchResult
              isCoordLoading={isCoordLoading}
              addresses={addresses}
              setdAddressSelected={setdAddressSelected}
            />
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default UploadCoordAndAddress;
