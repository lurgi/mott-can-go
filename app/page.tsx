import NaverMap from "@/components/Naver-map";
import SideBar from "@/components/Sidebar";
import SideBarTogle from "@/components/MobileDropBar/MobileDropBarToggle";

export default function Home() {
  return (
    <div className="flex h-full pt-16 relative">
      <SideBar />
      <NaverMap />
      <SideBarTogle />
    </div>
  );
}
