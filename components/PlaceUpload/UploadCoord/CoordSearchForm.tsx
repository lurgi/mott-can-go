"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CardContent, CardHeader } from "../../ui/card";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { PlaceType } from "@/app/place/upload/page";

const formSchema = z.object({
  address: z.string().min(2, {
    message: "정확한 주소를 입력해주세요.",
  }),
});

const SearchForm = ({
  setAddresses,
  setIsCoordLoading,
}: {
  setAddresses: Dispatch<SetStateAction<PlaceType[]>>;
  setIsCoordLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
    },
  });

  const onSubmit = async ({ address }: z.infer<typeof formSchema>) => {
    setIsCoordLoading(true);
    const response = await axios.post("/api/get_coord", { address });
    setAddresses(response.data);
    setIsCoordLoading(false);
  };
  return (
    <CardContent className="p-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <CardHeader>
                  <FormLabel className="font-semibold">
                    주소를 입력하세요.
                  </FormLabel>
                  <FormDescription className="">
                    정확한 도로명 주소 혹은 지번 주소를 입력하세요.
                  </FormDescription>
                </CardHeader>
                <CardContent>
                  <FormControl>
                    <Input placeholder="주소를 입력하세요." {...field} />
                  </FormControl>
                  <FormMessage />
                  <div className="flex justify-center pt-2">
                    <Button type="submit" className="h-8 w-20 text-sm">
                      주소 검색
                    </Button>
                  </div>
                </CardContent>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </CardContent>
  );
};

export default SearchForm;
