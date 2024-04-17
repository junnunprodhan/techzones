

import Categories from "@/components/ui/HomePage/Categories/Categories";
import ExploreCategories from "@/components/ui/HomePage/ExploreCategories/ExploreCategories";
import FlashSellProduct from "@/components/ui/HomePage/FlashSellProduct/FlashSellProduct";
import HeroSection from "@/components/ui/HomePage/HeroSection";
import TopRatedProduct from "@/components/ui/HomePage/TopRatedProduct/TopRatedProduct";


export default function Home() {
  return (
    <main>
     <HeroSection/>
     <FlashSellProduct/>
     <ExploreCategories/>
     <Categories/>
     <TopRatedProduct/>
    </main>
  );
}
