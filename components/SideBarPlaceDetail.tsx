import { PlaceType } from "@/lib/navermaps";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SideBarPlaceDetail = ({ place }: { place: PlaceType }) => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{place.name}</AccordionTrigger>
          <AccordionContent>{place.description}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SideBarPlaceDetail;
