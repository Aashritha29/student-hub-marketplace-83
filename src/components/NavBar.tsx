import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, Users, MessageSquare, LogIn, Menu, X, Infinity } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function NavBar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Home", icon: Home, path: "/" },
    { label: "Marketplace", icon: ShoppingBag, path: "/marketplace" },
    { label: "Social", icon: Users, path: "/social" },
    { label: "Messages", icon: MessageSquare, path: "/messages" },
  ];

  const navClasses = cn(
    "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 transition-all duration-300",
    {
      "bg-background/80 backdrop-blur-lg shadow-subtle": isScrolled,
      "bg-transparent": !isScrolled,
    }
  );

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold flex items-center space-x-2 text-brand-navy dark:text-white"
        >
          <div className="h-8 w-8 flex items-center justify-center">
            <Infinity className="h-7 w-7" style={{ color: '#ea384c', stroke: '#132958', strokeWidth: 2.5 }} />
          </div>
          <span>Campus Connect</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium subtle-ring-focus rounded-md px-3 py-2 transition-colors",
                  {
                    "text-brand-navy dark:text-white": location.pathname === item.path,
                    "text-muted-foreground hover:text-foreground": location.pathname !== item.path,
                  }
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <Link
            to="/sign-in"
            className="bg-brand-red hover:bg-brand-red/90 text-white font-medium rounded-lg px-4 py-2 flex items-center space-x-1 transition-colors"
          >
            <LogIn className="h-4 w-4 mr-1" />
            <span>Sign In</span>
          </Link>
        </div>

        <div className="flex md:hidden items-center space-x-4">
          <Link
            to="/sign-in"
            className="bg-brand-red hover:bg-brand-red/90 text-white font-medium rounded-lg px-3 py-1.5 flex items-center transition-colors"
          >
            <LogIn className="h-4 w-4" />
          </Link>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground p-1 rounded-md subtle-ring-focus"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-slide-down shadow-elevated">
          <div className="p-4 space-y-4 max-w-7xl mx-auto">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-3 py-3 px-4 rounded-lg",
                    {
                      "bg-accent/10 text-accent": location.pathname === item.path,
                      "hover:bg-secondary": location.pathname !== item.path,
                    }
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
