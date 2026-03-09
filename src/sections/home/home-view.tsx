import ContactUs from "@/components/ContactUs";
import HeroMain from "@/components/HeroMain";
import InstallmentCTA from "@/components/InstallmentCTA";
import Model from "@/components/Model";
import RequestDemo from "@/components/RequestDemo";

const HomeView = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <HeroMain />
      <Model />
      <RequestDemo />
      <InstallmentCTA />
      <ContactUs />
    </main>
  );
};

export default HomeView;
