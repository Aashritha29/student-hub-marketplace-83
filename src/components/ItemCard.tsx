
import { Link } from "react-router-dom";
import { Tag, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface Seller {
  id: number;
  name: string;
  avatar: string;
}

interface Item {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  location: string;
  seller: Seller;
}

interface ItemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  item: Item;
}

export function ItemCard({ item, className, ...props }: ItemCardProps) {
  return (
    <div 
      className={cn(
        "group bg-card rounded-xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300",
        className
      )}
      {...props}
    >
      <Link to={`/item/${item.id}`} className="block relative">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium bg-black/60 text-white backdrop-blur-xs rounded-md flex items-center">
              <Tag className="mr-1 h-3 w-3" />
              {item.category}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between">
            <h3 className="font-medium text-foreground line-clamp-2 leading-tight">{item.title}</h3>
          </div>
          
          <div className="mt-2 mb-3 flex items-center text-sm text-muted-foreground">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{item.location}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg rupee">{item.price.toLocaleString()}</div>
            
            <div className="flex items-center text-sm">
              <img 
                src={item.seller.avatar} 
                alt={item.seller.name}
                className="h-6 w-6 rounded-full mr-2 object-cover"
              />
              <span className="text-muted-foreground">{item.seller.name}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
