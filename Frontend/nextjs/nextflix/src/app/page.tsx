import EnjoyOnYourTV from "@/components/enjoyonyourtv";
import Hero from "@/components/hero";
import WatchEverywhere from "@/components/watchEverywhere";
import Kids from "@/components/kids";
import Offline from "@/components/offline";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <EnjoyOnYourTV />
      <WatchEverywhere />
      <Kids />
      <Offline />
      <Faq />
      <Footer />
    </div>
  );
}
