import { ArrowRight, BookOpen, Monitor, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Hero() {
  const categories = [
    { name: "Textbooks", icon: BookOpen, color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" },
    { name: "Crafts", icon: Palette, color: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400" },
    { name: "Gadgets", icon: Monitor, color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400" },
  ];

  return (
    <div className="relative overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-70 dark:opacity-30">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-brand-red/5 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-brand-navy/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-in">
            Trade, Connect, and Network with Campus Connect
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up" style={{animationDelay: "150ms"}}>
            Trade, Connect, and Network with Fellow Students
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up" style={{animationDelay: "250ms"}}>
            Campus Connect is your go-to platform for trading essentials and building meaningful connections with fellow students on campus.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: "350ms"}}>
            <Link 
              to="/marketplace" 
              className="w-full sm:w-auto px-6 py-3 bg-brand-navy hover:bg-brand-navy/90 text-white rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <span>Start Trading</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link 
              to="/social" 
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-50 dark:bg-white/10 dark:hover:bg-white/15 text-foreground border border-border rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              Connect with Students
            </Link>
          </div>
        </div>

        {/* Category Shortcuts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="group animate-scale-in"
              style={{animationDelay: `${450 + (index * 100)}ms`}}
            >
              <Link 
                to={`/marketplace?category=${category.name.toLowerCase()}`}
                className="block h-full glass-panel rounded-xl p-6 hover:shadow-elevated transition-all"
              >
                <div className={cn("p-3 rounded-lg inline-flex mb-4", category.color)}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Trade {category.name.toLowerCase()} with other students
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
