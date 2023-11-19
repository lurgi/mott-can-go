"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import UploadForm from "@/components/PlaceUpload/UploadForm";
import UploadImage from "@/components/PlaceUpload/UploadImage";

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

const PlaceAddPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      placeName: "",
      description: "",
    },
  });

  const [placeImages, setPlaceImages] = useState<any[]>([]);

  const onSubmit = ({ description, placeName }: z.infer<typeof formSchema>) => {
    // submit callback
    console.log(description, placeName);
    if (!placeImages) {
      // Error Handling
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="w-80">
        <UploadImage
          placeImages={placeImages}
          setPlaceImages={setPlaceImages}
        />
        <UploadForm form={form} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default PlaceAddPage;
