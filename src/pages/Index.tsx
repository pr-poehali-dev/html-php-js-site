import HeroSection from "@/components/HeroSection";
import PopularDestinations from "@/components/PopularDestinations";
import ReviewsSection from "@/components/ReviewsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PopularDestinations />
      <ReviewsSection />
    </div>
  );
};

export default Index;
