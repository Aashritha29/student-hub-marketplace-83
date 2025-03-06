
import { useState } from "react";
import { ChevronLeft, MapPin, User, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

// Mock data for demonstration
const mockItems = [
  {
    id: "1",
    title: "Engineering Physics Textbook",
    description: "Like-new condition engineering physics textbook. Covers mechanics, thermodynamics, optics, and modern physics. Perfect for first-year engineering students.",
    price: 599,
    category: "Books",
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2073&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2076&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2048&auto=format&fit=crop",
    ],
    location: "Delhi University",
    listedDate: "2023-08-05T06:30:00.000Z",
    condition: "Like New",
    seller: {
      id: 1,
      name: "Rohit Sharma",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4.8,
      reviews: 12,
      listings: 5,
      joinedDate: "2022-07-15",
    },
  },
  {
    id: "2",
    title: "Dell XPS 13 Laptop",
    description: "Dell XPS 13 (9310), Intel Core i7 11th Gen, 16GB RAM, 512GB SSD, Windows 11. In excellent condition with charger and original packaging. Perfect for programming and design work.",
    price: 45999,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2089&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2089&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642632559-8db5b20a534f?q=80&w=2089&auto=format&fit=crop",
    ],
    location: "IIT Mumbai",
    listedDate: "2023-09-12T14:20:00.000Z",
    condition: "Excellent",
    seller: {
      id: 2,
      name: "Priya Patel",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4.9,
      reviews: 24,
      listings: 3,
      joinedDate: "2023-01-05",
    },
  },
];

export function ItemDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Find the item with the matching ID
  const item = mockItems.find(item => item.id === id);
  
  if (!item) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Item Not Found</h2>
        <p className="text-muted-foreground mb-6">The item you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/marketplace" 
          className="flex items-center text-brand-navy hover:underline"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Marketplace
        </Link>
      </div>
    );
  }
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };
  
  return (
    <div className="pt-24 pb-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <Link 
          to="/marketplace" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Marketplace
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden">
              <img 
                src={item.images[activeImageIndex]} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {item.images.map((image, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all",
                    {
                      "ring-2 ring-brand-navy": activeImageIndex === index,
                      "opacity-70 hover:opacity-100": activeImageIndex !== index,
                    }
                  )}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`${item.title} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Item Details */}
          <div>
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {item.category}
                </span>
                <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm">
                  {item.condition}
                </span>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h1>
              
              <div className="text-2xl font-bold text-brand-navy dark:text-white rupee mb-4">
                {item.price.toLocaleString()}
              </div>
              
              <div className="flex items-center text-muted-foreground mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{item.location}</span>
                <span className="mx-2">•</span>
                <span>Listed on {formatDate(item.listedDate)}</span>
              </div>
              
              <div className="prose dark:prose-invert max-w-none mb-8">
                <h3 className="text-lg font-medium mb-2">Description</h3>
                <p>{item.description}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="px-6 py-3 bg-brand-navy hover:bg-brand-navy/90 text-white rounded-lg font-medium flex items-center justify-center transition-colors">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Seller
                </button>
                
                <button className="px-6 py-3 bg-white hover:bg-gray-50 dark:bg-white/10 dark:hover:bg-white/15 text-foreground border border-border rounded-lg font-medium flex items-center justify-center transition-colors">
                  Save for Later
                </button>
              </div>
            </div>
            
            {/* Seller Information */}
            <div className="p-6 bg-secondary rounded-xl">
              <h3 className="text-lg font-medium mb-4">About the Seller</h3>
              
              <div className="flex items-start">
                <img 
                  src={item.seller.avatar} 
                  alt={item.seller.name}
                  className="h-14 w-14 rounded-full mr-4 object-cover"
                />
                
                <div>
                  <h4 className="font-medium">{item.seller.name}</h4>
                  <div className="text-sm text-muted-foreground mb-2">
                    Member since {new Date(item.seller.joinedDate).getFullYear()}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="font-medium">{item.seller.rating}</span>
                      <span className="text-muted-foreground"> / 5 Rating</span>
                    </div>
                    
                    <div>
                      <span className="font-medium">{item.seller.reviews}</span>
                      <span className="text-muted-foreground"> Reviews</span>
                    </div>
                    
                    <div>
                      <span className="font-medium">{item.seller.listings}</span>
                      <span className="text-muted-foreground"> Listings</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link
                to={`/profile/${item.seller.id}`}
                className="mt-4 text-center w-full px-4 py-2 bg-transparent border border-border rounded-lg text-sm font-medium hover:bg-background transition-colors flex items-center justify-center"
              >
                <User className="h-4 w-4 mr-2" />
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
