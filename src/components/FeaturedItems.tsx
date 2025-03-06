
import { useEffect, useState } from "react";
import { ItemCard } from "./ItemCard";

// Mock data for demonstration purposes
const mockItems = [
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
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
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
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  },
  {
    id: 3,
    title: "Handmade Pottery Set",
    price: 1499,
    category: "Crafts",
    image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=2089&auto=format&fit=crop",
    location: "VIT Vellore",
    seller: {
      id: 3,
      name: "Arjun Kumar",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  },
  {
    id: 4,
    title: "Fitness Smartwatch",
    price: 2199,
    category: "Gadgets",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2070&auto=format&fit=crop",
    location: "BITS Pilani",
    seller: {
      id: 4,
      name: "Divya Singh",
      avatar: "https://randomuser.me/api/portraits/women/62.jpg",
    },
  },
];

export function FeaturedItems() {
  const [items, setItems] = useState(mockItems);
  const [loading, setLoading] = useState(true);

  // Simulate loading state for UI polish
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Featured Items for Trade</h2>
            <p className="text-muted-foreground mt-1">Discover popular items from students across universities</p>
          </div>
          <a href="/marketplace" className="text-brand-navy dark:text-blue-400 font-medium hover:underline">
            View all
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-[350px] bg-card/60 animate-pulse rounded-xl"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <ItemCard
                key={item.id}
                item={item}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
