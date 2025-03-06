
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavBar } from "@/components/NavBar";
import Index from "@/pages/Index";
import Marketplace from "@/pages/Marketplace";
import Social from "@/pages/Social";
import Messages from "@/pages/Messages";
import SignIn from "@/pages/SignIn";
import NotFound from "@/pages/NotFound";
import { ItemDetail } from "@/components/ItemDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/social" element={<Social />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
