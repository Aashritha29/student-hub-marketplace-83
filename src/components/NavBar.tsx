
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, User, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function NavBar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Home", icon: Home, path: "/" },
    { label: "Marketplace", icon: ShoppingBag, path: "/marketplace" },
    { label: "Profile", icon: User, path: "/profile" },
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
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl font-semibold flex items-center space-x-2 text-brand-navy dark:text-white"
        >
          <span className="text-brand-red">Uni</span>
          <span>Market</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Search Bar */}
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="search"
              className="glass-input w-full pl-10 pr-4 py-2 rounded-full text-sm"
              placeholder="Search products..."
            />
          </div>

          {/* Nav Links */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium subtle-ring-focus rounded-md px-2 py-1 transition-colors",
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
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-4">
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

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-slide-down shadow-elevated">
          <div className="p-4 space-y-4 max-w-7xl mx-auto">
            {/* Mobile Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="search"
                className="glass-input w-full pl-10 pr-4 py-3 rounded-lg text-sm"
                placeholder="Search products..."
              />
            </div>

            {/* Mobile Nav Links */}
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
