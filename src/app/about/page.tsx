import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Leaders from "@/components/Leaders";
import MasterPage from "@/templates/MasterPage";

export default function Page() {
  return (
    <MasterPage>
      <About />
      <Leaders />
      <Gallery />
      <Contact />
    </MasterPage>
  );
}
