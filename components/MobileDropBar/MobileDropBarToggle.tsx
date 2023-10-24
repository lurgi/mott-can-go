"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import MobileDropBarToggleBtn from "./MobileDropBarToggleBtn";
import MobileDropBarContents from "./MobileDropBarContents";

const MobileDropBarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cn(
        isOpen ? "h-3/5" : "h-8",
        "sm:hidden absolute bottom-0 w-full flex flex-col items-center transition-all"
      )}
    >
      <MobileDropBarToggleBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileDropBarContents isOpen={isOpen} />
    </div>
  );
};

export default MobileDropBarToggle;
