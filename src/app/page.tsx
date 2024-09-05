import Home from "@/components/Home";
import Updates from "@/components/Updates";
import Testimonies from "@/components/Testimonies";
import MasterPage from "@/templates/MasterPage";

export default function page() {
  return (
    <MasterPage>
      <Home />
      <Updates />
      <Testimonies />
    </MasterPage>
  );
}
