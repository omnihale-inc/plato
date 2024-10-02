import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import History from "@/components/History";
import Leaders from "@/components/Leaders";
import MasterPage from "@/templates/MasterPage";

export default function Page() {
  return (
    <MasterPage>
      <About />
      <Leaders />
      <Gallery />
      <History />
      <Contact />
    </MasterPage>
  );
}
