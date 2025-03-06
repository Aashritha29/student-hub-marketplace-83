
import { useState } from "react";
import { User, MessageCircle, Heart } from "lucide-react";

const mockPosts = [
  {
    id: 1,
    user: {
      name: "Rahul Verma",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      username: "rahul_v",
    },
    content: "Just aced my final exams! Anyone want to trade for some engineering books I don't need anymore?",
    likes: 24,
    comments: 5,
    time: "2 hours ago"
  },
  {
    id: 2,
    user: {
      name: "Priya Patel",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      username: "priya_patel",
    },
    content: "Check out this new art piece I made in my crafts class! Would love to trade it for some art supplies.",
    image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&w=2094&auto=format&fit=crop",
    likes: 42,
    comments: 8,
    time: "3 hours ago"
  },
  {
    id: 3,
    user: {
      name: "Vikram Singh",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      username: "vikram_s",
    },
    content: "Anyone in Delhi University want to trade a statistics textbook for a calculus one? Let me know!",
    likes: 7,
    comments: 15,
    time: "5 hours ago"
  }
];

const Social = () => {
  const [posts, setPosts] = useState(mockPosts);
  
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Social Feed</h1>
          <button className="px-4 py-2 bg-brand-red text-white rounded-lg">
            New Post
          </button>
        </div>

        {/* Create Post */}
        <div className="bg-card rounded-xl shadow-subtle p-4 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-muted"></div>
            <input 
              type="text" 
              placeholder="What's on your mind?" 
              className="flex-1 bg-muted rounded-full px-4 py-2 text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button className="px-4 py-2 bg-brand-navy text-white rounded-lg text-sm">
              Post
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map(post => (
            <div key={post.id} className="bg-card rounded-xl shadow-subtle overflow-hidden">
              {/* Post Header */}
              <div className="p-4 flex items-center space-x-3">
                <img 
                  src={post.user.avatar} 
                  alt={post.user.name} 
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">{post.user.name}</div>
                  <div className="text-sm text-muted-foreground">@{post.user.username} · {post.time}</div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4 pt-0">
                <p className="mb-4">{post.content}</p>
                {post.image && (
                  <img 
                    src={post.image} 
                    alt="Post image" 
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>

              {/* Post Actions */}
              <div className="px-4 py-3 border-t border-border flex items-center space-x-6">
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground">
                  <Heart className="h-5 w-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground">
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments}</span>
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
