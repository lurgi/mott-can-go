"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import axios from "axios";

import { useForm } from "react-hook-form";
import { useState } from "react";

import UploadForm from "@/components/PlaceUpload/UploadForm";
import UploadImage from "@/components/PlaceUpload/UploadImage";
import UploadCoord from "@/components/PlaceUpload/UploadCoord";

const formSchema = z.object({
  placeName: z
    .string()
    .min(1, {
      message: "이름을 적어주세요",
    })
    .max(20, { message: "이름은 최대 20자 까지 적을 수 있습니다" }),
  description: z
    .string()
    .min(1, {
      message: "설명을 적어주세요",
    })
    .max(50, { message: "설명은 최대 50자 까지 적을 수 있습니다" }),
});

interface IPlace {
  englishAddress?: string;
  jibunAddress?: string;
  roadAddress?: string;
  x?: string;
  y?: string;
}

export type PlaceType = undefined | IPlace;

const PlaceAddPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      placeName: "",
      description: "",
    },
  });

  const [placeImages, setPlaceImages] = useState<any[]>([]);
  const [placeInfo, setPlaceInfo] = useState<PlaceType>();

  const onSubmit = async ({
    description,
    placeName,
  }: z.infer<typeof formSchema>) => {
    if (placeImages.length === 0) {
      // Error Handling
      return;
    }
    if (!placeInfo) {
      // Errror Handling;
      return;
    }
    const { roadAddress, englishAddress, x, y } = placeInfo;
    // image 업로드는 ClodFlare 정기 결제 해야해서 패스...
    await axios.post("/api/upload_place", {
      description,
      placeName,
      placeInfo: {
        roadAddress,
        englishAddress,
        x,
        y,
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="mt-8 w-[50%] min-w-[20rem]">
        <UploadImage
          placeImages={placeImages}
          setPlaceImages={setPlaceImages}
        />
        <UploadCoord placeInfo={placeInfo} setPlaceInfo={setPlaceInfo} />
        <UploadForm form={form} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default PlaceAddPage;
