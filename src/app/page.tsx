import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import Updates from "@/components/Updates";
import Footer from "@/components/Footer";
import Testimonies from "@/components/Testimonies";

export default function page() {
  return (
    <main>
      <Navigation />
      <Home media="image" />
      <Updates />
      <Testimonies />
      <Footer />
    </main>
  );
}
