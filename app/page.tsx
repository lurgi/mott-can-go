import NaverMap from "@/components/Naver-map";
import SideBar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <NaverMap />
    </div>
  );
}
