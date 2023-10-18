import { PlaceType } from "@/lib/types/naver-types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PlaceDetailHeader from "./PlaceDetailHeader";
import PlaceDetailContents from "./PlaceDetailContents";

const PlaceDetailUi = ({ place }: { place: PlaceType }) => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-2 w-[100%]">
            <PlaceDetailHeader place={place} />
          </AccordionTrigger>
          <AccordionContent>
            <PlaceDetailContents place={place} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default PlaceDetailUi;
