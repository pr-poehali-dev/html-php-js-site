import HeroSection from "@/components/HeroSection";
import PopularDestinations from "@/components/PopularDestinations";
import ReviewsSection from "@/components/ReviewsSection";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PopularDestinations />
      <ReviewsSection />
    </div>
  );
};

export default Index;
