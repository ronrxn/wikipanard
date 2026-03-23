import { createClient } from "@/lib/supabase/server";
import GridElement from "../element/grid-element";

export default async function MainGrid() {

  const supabase = await createClient()


  let { data: panards, error } = await supabase
    .from('panard')
    .select('*')

  return (
    <div className="grid grid-cols-3 gap-2 mt-5">
      {
        panards?.map((panard, index) => {
          return <GridElement></GridElement>
        })
      }
    </div>
  );
}