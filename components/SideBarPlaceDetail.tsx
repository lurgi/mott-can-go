import { PlaceType } from "@/lib/navermaps";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const SideBarPlaceDetail = ({ place }: { place: PlaceType }) => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-2 w-[100%]">
            <div className="font-semibold text-start w-3/4 whitespace-nowrap overflow-hidden overflow-ellipsis">
              {place.name}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <div className="w-full aspect-video border rounded-md bg-slate-500"></div>
              <div className="side-bar_info_des">{place.description}</div>
              <Link
                href={`https://m.place.naver.com/restaurant/${place.naverId}/home`}
              >
                <p className="info_link">자세히 보기 &rarr;</p>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SideBarPlaceDetail;
