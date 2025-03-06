
import { Link } from "react-router-dom";
import { UserPlus, Users, MessageCircle, Heart, Share2, Send } from "lucide-react";

const Social = () => {
  // Mock data for social feed
  const posts = [
    {
      id: 1,
      user: {
        id: 101,
        name: "Rohit Sharma",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        username: "rohit_s"
      },
      content: "Just finished my final exams! Time to celebrate 🎉",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop",
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
      content: "Looking for study partners for the upcoming calculus exam. Anyone interested? #StudyGroup #Calculus",
      image: null,
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
      content: "Check out the new tech hub on campus! It's amazing what they've done with the space.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
      likes: 56,
      comments: 7,
      time: "1 day ago"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Story/Update Bar */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-4">
            {/* Your Story */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-brand-red flex items-center justify-center bg-accent/10 cursor-pointer">
                <span className="text-xl">+</span>
              </div>
              <span className="text-xs mt-1 text-muted-foreground">Your Story</span>
            </div>
            
            {/* Sample Stories */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full ring-2 ring-brand-red p-[2px] cursor-pointer">
                  <img 
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`} 
                    alt="User avatar" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="text-xs mt-1 truncate w-16 text-center">user_{i}</span>
              </div>
            ))}
          </div>
        </div>
        
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
              placeholder="What's on your mind?" 
              className="bg-accent/10 text-foreground rounded-full py-2 px-4 flex-1 text-sm"
            />
          </div>
          <div className="flex justify-between border-t pt-3">
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
              <Users className="h-4 w-4" />
              <span>Tag Friends</span>
            </button>
            <button className="px-4 py-1.5 bg-brand-navy text-white rounded-lg text-sm font-medium">
              Post
            </button>
          </div>
        </div>
        
        {/* Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
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
                    <MessageCircle className="h-5 w-5" />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
