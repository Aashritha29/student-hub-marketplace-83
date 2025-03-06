
import { useState } from "react";
import { MarketplaceCategories } from "@/components/MarketplaceCategories";
import { ItemCard } from "@/components/ItemCard";
import { Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Mock data for marketplace items
  const items = [
    {
      id: 1,
      title: "Engineering Physics Textbook",
      price: 599,
      category: "Textbooks",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2073&auto=format&fit=crop",
      location: "Delhi University",
      seller: {
        id: 1,
        name: "Rohit Sharma",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      }
    },
    {
      id: 2,
      title: "Dell XPS 13 Laptop",
      price: 45999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2089&auto=format&fit=crop",
      location: "IIT Mumbai",
      seller: {
        id: 2,
        name: "Priya Patel",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      }
    },
    {
      id: 3,
      title: "Handmade Ceramic Mug Set (4 Pieces)",
      price: 1299,
      category: "Crafts",
      image: "https://images.unsplash.com/photo-1577817864835-f5acd6d3df9d?q=80&w=2070&auto=format&fit=crop",
      location: "Bangalore University",
      seller: {
        id: 3,
        name: "Amit Kumar",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg"
      }
    },
    {
      id: 4,
      title: "Apple iPad Pro 11-inch (2022)",
      price: 52999,
      category: "Gadgets",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2033&auto=format&fit=crop",
      location: "Delhi University",
      seller: {
        id: 4,
        name: "Neha Singh",
        avatar: "https://randomuser.me/api/portraits/women/63.jpg"
      }
    },
    {
      id: 5,
      title: "Calculus: Early Transcendentals",
      price: 499,
      category: "Textbooks",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop",
      location: "Chennai University",
      seller: {
        id: 5,
        name: "Vikram Desai",
        avatar: "https://randomuser.me/api/portraits/men/79.jpg"
      }
    },
    {
      id: 6,
      title: "Graphic Design Tablet",
      price: 8999,
      category: "Gadgets",
      image: "https://images.unsplash.com/photo-1620674156044-52b714665818?q=80&w=2126&auto=format&fit=crop",
      location: "Mumbai University",
      seller: {
        id: 6,
        name: "Ananya Mehta",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg"
      }
    }
  ];

  // Handle category selection from MarketplaceCategories
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  
  // Filter items based on search query and selected category
  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="pt-20 pb-16 min-h-screen">
      <MarketplaceCategories onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory} />
      
      <div className="py-8 px-6 md:px-8 max-w-7xl mx-auto">
        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full pl-10 pr-4 py-2.5 bg-muted rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          
          <button className="px-4 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg flex items-center justify-center gap-2 transition-colors">
            <SlidersHorizontal className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>
        
        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-3 py-16 text-center">
              <p className="text-muted-foreground">No items found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
