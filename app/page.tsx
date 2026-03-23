import MainPage from "@/component/main-page/main-page";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient()


  let { data: panard, error } = await supabase
    .from('panard')
    .select('*')

  console.log(panard)

  return (
    <div className="flex justify-center">
      <MainPage></MainPage>
    </div>
  );
}
