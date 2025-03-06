
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, Users, MessageCircle, LogIn, Menu, X } from "lucide-react";
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
    { label: "Social", icon: Users, path: "/social" },
    { label: "Messages", icon: MessageCircle, path: "/messages" },
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
          <svg className="h-8 w-8 text-brand-red" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 9C8.5 7.067 10.067 5.5 12 5.5C13.933 5.5 15.5 7.067 15.5 9C15.5 10.933 13.933 12.5 12 12.5C10.067 12.5 8.5 10.933 8.5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5 9C16.5 7.067 18.067 5.5 20 5.5C21.933 5.5 23.5 7.067 23.5 9C23.5 10.933 21.933 12.5 20 12.5C18.067 12.5 16.5 10.933 16.5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M0.5 9C0.5 7.067 2.067 5.5 4 5.5C5.933 5.5 7.5 7.067 7.5 9C7.5 10.933 5.933 12.5 4 12.5C2.067 12.5 0.5 10.933 0.5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.5 15C8.5 13.067 10.067 11.5 12 11.5C13.933 11.5 15.5 13.067 15.5 15C15.5 16.933 13.933 18.5 12 18.5C10.067 18.5 8.5 16.933 8.5 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Campus Connect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Nav Links */}
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

          {/* Sign In Button */}
          <Link
            to="/sign-in"
            className="bg-brand-red hover:bg-brand-red/90 text-white font-medium rounded-lg px-4 py-2 flex items-center space-x-1 transition-colors"
          >
            <LogIn className="h-4 w-4 mr-1" />
            <span>Sign In</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
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

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-slide-down shadow-elevated">
          <div className="p-4 space-y-4 max-w-7xl mx-auto">
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
