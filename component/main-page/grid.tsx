import GridElement from "../element/grid-element";
import { exemples } from "@/exemple";

export default function MainGrid() {
  return (
    <div className="grid grid-cols-3 gap-2 mt-5">
      {
        exemples.map((exemple, index) => {
          return <GridElement exemple={exemple} key={index}></GridElement>
        })
      }
    </div>
  );
}