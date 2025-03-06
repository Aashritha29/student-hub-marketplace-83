
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, MessageSquare, Heart, Share2, Send, PlusCircle, Tag, MapPin, ShoppingBag } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Social = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        id: 101,
        name: "Rohit Sharma",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        username: "rohit_s"
      },
      content: "Selling my engineering textbooks. Great condition, hardly used! DM for details.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2073&auto=format&fit=crop",
      price: 599,
      category: "Textbooks",
      location: "Delhi University",
      likes: 42,
      comments: 8,
      time: "2 hours ago"
    },
    {
      id: 2,
      user: {
        id: 102,
        name: "Priya Patel",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        username: "priya_p"
      },
      content: "Looking to rent my graphing calculator for the semester. Perfect for advanced math courses. 300₹/month.",
      image: null,
      price: 300,
      category: "Accessories",
      location: "Mumbai University",
      likes: 13,
      comments: 21,
      time: "5 hours ago"
    },
    {
      id: 3,
      user: {
        id: 103,
        name: "Amit Kumar",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        username: "amit_k"
      },
      content: "Selling my barely used iPad Pro 11-inch. Perfect for note-taking and design work. Comes with Apple Pencil.",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2033&auto=format&fit=crop",
      price: 45000,
      category: "Electronics",
      location: "Chennai University",
      likes: 56,
      comments: 7,
      time: "1 day ago"
    }
  ]);
  
  const [postContent, setPostContent] = useState("");
  const [postCategory, setPostCategory] = useState("Textbooks");
  const [postPrice, setPostPrice] = useState("");
  const [postLocation, setPostLocation] = useState("");
  
  const handlePost = () => {
    if (!postContent.trim()) {
      toast({
        title: "Error",
        description: "Please enter post content",
        variant: "destructive"
      });
      return;
    }
    
    const newPost = {
      id: Date.now(),
      user: {
        id: 999,
        name: "Your Name",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        username: "your_username"
      },
      content: postContent,
      image: null,
      price: Number(postPrice) || 0,
      category: postCategory,
      location: postLocation || "Campus",
      likes: 0,
      comments: 0,
      time: "Just now"
    };
    
    setPosts([newPost, ...posts]);
    setPostContent("");
    setPostPrice("");
    setPostLocation("");
    
    toast({
      title: "Success",
      description: "Your post has been published",
    });
  };

  const categoryOptions = [
    "Textbooks", "Electronics", "Furniture", "Clothing", 
    "Accessories", "Services", "Gadgets", "Crafts", "Other"
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Create Post */}
        <div className="bg-card rounded-xl shadow-subtle p-4 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Your profile" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <input 
              type="text" 
              placeholder="What are you selling or renting today?" 
              className="bg-accent/10 text-foreground rounded-full py-2 px-4 flex-1 text-sm"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-sm text-muted-foreground">Category</label>
              <select 
                className="w-full mt-1 bg-accent/10 text-foreground rounded-lg py-2 px-3 text-sm"
                value={postCategory}
                onChange={(e) => setPostCategory(e.target.value)}
              >
                {categoryOptions.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Price (₹)</label>
              <input 
                type="number" 
                className="w-full mt-1 bg-accent/10 text-foreground rounded-lg py-2 px-3 text-sm"
                placeholder="0"
                value={postPrice}
                onChange={(e) => setPostPrice(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Location</label>
              <input 
                type="text" 
                className="w-full mt-1 bg-accent/10 text-foreground rounded-lg py-2 px-3 text-sm"
                placeholder="Campus location"
                value={postLocation}
                onChange={(e) => setPostLocation(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex justify-between border-t pt-3">
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
              <PlusCircle className="h-4 w-4" />
              <span>Add Image</span>
            </button>
            <button 
              className="px-4 py-1.5 bg-brand-navy text-white rounded-lg text-sm font-medium"
              onClick={handlePost}
            >
              Post
            </button>
          </div>
        </div>
        
        {/* Feed */}
        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="bg-card rounded-xl shadow-subtle overflow-hidden">
                {/* Post Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.user.avatar} 
                      alt={post.user.name} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-foreground">{post.user.name}</h3>
                      <p className="text-xs text-muted-foreground">@{post.user.username} • {post.time}</p>
                    </div>
                  </div>
                  
                  <button className="text-muted-foreground hover:text-brand-navy transition-colors">
                    <UserPlus className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Post Content */}
                <div className="px-4 pb-3">
                  <p className="text-foreground">{post.content}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center px-2 py-1 bg-accent/10 text-xs font-medium rounded">
                      <Tag className="mr-1 h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-accent/10 text-xs font-medium rounded">
                      <MapPin className="mr-1 h-3 w-3" />
                      {post.location}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-brand-red/10 text-brand-red text-xs font-medium rounded">
                      ₹{post.price}
                    </span>
                  </div>
                </div>
                
                {/* Post Image (if available) */}
                {post.image && (
                  <div className="aspect-video w-full">
                    <img 
                      src={post.image} 
                      alt="Post content" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Post Actions */}
                <div className="px-4 py-3 flex items-center justify-between border-t border-border">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-brand-red transition-colors">
                      <Heart className="h-5 w-5" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-brand-navy transition-colors">
                      <MessageSquare className="h-5 w-5" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                  </div>
                  
                  <button className="text-muted-foreground hover:text-brand-navy transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Comment Input */}
                <div className="px-4 py-3 border-t border-border flex items-center gap-3">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Your profile" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <input 
                    type="text" 
                    placeholder="Write a comment..." 
                    className="bg-accent/10 text-foreground rounded-full py-1.5 px-3 flex-1 text-sm"
                  />
                  <button className="text-brand-navy">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-card rounded-xl shadow-subtle p-8 text-center">
              <div className="flex flex-col items-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No Posts Yet</h3>
                <p className="text-muted-foreground mb-4">Be the first to post about items you want to sell or rent!</p>
                <button className="px-4 py-2 bg-brand-navy text-white rounded-lg font-medium">
                  Create First Post
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Social;
