
import { MarketplaceCategories } from "@/components/MarketplaceCategories";
import { FeaturedItems } from "@/components/FeaturedItems";

const Marketplace = () => {
  return (
    <div className="min-h-screen pt-16">
      <MarketplaceCategories />
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Trade Items with Students</h1>
        <p className="text-muted-foreground mb-8">
          Browse items from students across universities and trade your unused items
        </p>
        <FeaturedItems />
      </div>
    </div>
  );
};

export default Marketplace;
