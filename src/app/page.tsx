import Home from "@/components/Home";
import Updates from "@/components/Posts";
import Testimonies from "@/components/Testimonies";
import MasterPage from "@/templates/MasterPage";
import Certificates from "@/components/Certificates";

export default function Page() {
  return (
    <MasterPage>
      <Home />
      <Updates />
      <Testimonies />
      <Certificates />
    </MasterPage>
  );
}
