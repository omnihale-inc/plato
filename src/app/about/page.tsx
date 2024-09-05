import About from "@/components/About";
import Contact from "@/components/Contact";
import Leaders from "@/components/Leaders";
import MasterPage from "@/templates/MasterPage";

export default function page() {
  return (
    <MasterPage>
      <About />
      <Leaders />
      <Contact />
    </MasterPage>
  );
}
