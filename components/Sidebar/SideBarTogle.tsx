"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

const SideBarTogle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen((bol) => !bol)}
      className={cn(
        isOpen ? "h-20" : "h-8",
        "sm:hidden absolute bottom-0 w-full bg-white z-50 transition-all"
      )}
    >
      sidebar togle
    </div>
  );
};

export default SideBarTogle;
