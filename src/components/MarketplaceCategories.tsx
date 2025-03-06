
import { useState } from "react";
import { BookOpen, Monitor, Crafts, Package, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface Category {
  name: string;
  icon: React.ElementType;
}

export function MarketplaceCategories() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const categories: Category[] = [
    { name: "All", icon: ShoppingBag },
    { name: "Textbooks", icon: BookOpen },
    { name: "Electronics", icon: Monitor },
    { name: "Crafts", icon: Crafts },
    { name: "Gadgets", icon: Package },
  ];

  return (
    <div className="overflow-x-auto py-4 px-6 md:px-8 bg-background sticky top-16 z-40 shadow-subtle">
      <div className="flex space-x-2 md:space-x-4 max-w-7xl mx-auto">
        {categories.map((category) => (
          <button
            key={category.name}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors",
              activeCategory === category.name
                ? "bg-brand-navy text-white"
                : "bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setActiveCategory(category.name)}
          >
            <category.icon className="h-4 w-4" />
            <span className="font-medium text-sm">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
