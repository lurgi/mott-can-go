import { cn } from "@/lib/utils";
import PlaceDetail from "../PlaceDetail/PlaceDetail";

interface IMobileDropBarContents {
  isOpen: boolean;
}

const MobileDropBarContents = ({ isOpen }: IMobileDropBarContents) => {
  return (
    <div className={cn(isOpen ? "h-full block" : "h-0", "bg-white w-full")}>
      <PlaceDetail />
    </div>
  );
};

export default MobileDropBarContents;
