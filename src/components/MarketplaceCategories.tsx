
import { Check } from "lucide-react";

// Create a type for the component props
interface MarketplaceCategoriesProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

export const MarketplaceCategories = ({ onSelectCategory, selectedCategory }: MarketplaceCategoriesProps) => {
  const categories = [
    { id: "all", name: "All" },
    { id: "textbooks", name: "Textbooks" },
    { id: "electronics", name: "Electronics" },
    { id: "gadgets", name: "Gadgets" },
    { id: "furniture", name: "Furniture" },
    { id: "clothing", name: "Clothing" },
    { id: "accessories", name: "Accessories" },
    { id: "services", name: "Services" },
    { id: "crafts", name: "Crafts" },
    { id: "other", name: "Other" }
  ];
  
  return (
    <div className="border-b border-border">
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <div className="overflow-x-auto py-4">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.name)}
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category.name
                    ? "bg-brand-navy text-white"
                    : "bg-accent/10 hover:bg-accent/20 text-foreground"
                }`}
              >
                {selectedCategory === category.name && (
                  <Check className="mr-1 h-3.5 w-3.5" />
                )}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
