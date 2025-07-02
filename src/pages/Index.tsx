import GlampingHero from "@/components/GlampingHero";
import HotelOffers from "@/components/HotelOffers";
import GlampingReviews from "@/components/GlampingReviews";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GlampingHero />
      <HotelOffers />
      <GlampingReviews />
    </div>
  );
};

export default Index;
