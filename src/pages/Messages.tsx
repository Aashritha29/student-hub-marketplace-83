
import { useState } from "react";
import { SearchIcon, Send } from "lucide-react";

const mockConversations = [
  {
    id: 1,
    user: {
      name: "Priya Patel",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      online: true,
    },
    lastMessage: "Hey, are you still interested in trading the textbook?",
    time: "2 min ago",
    unread: 2,
  },
  {
    id: 2,
    user: {
      name: "Rahul Verma",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      online: false,
    },
    lastMessage: "Thanks for the trade! The calculator works great.",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: 3,
    user: {
      name: "Ananya Singh",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      online: true,
    },
    lastMessage: "I have some crafts supplies I'd like to trade. Interested?",
    time: "2 days ago",
    unread: 0,
  },
];

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState<number | null>(1);
  const [conversations, setConversations] = useState(mockConversations);
  
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 h-[calc(100vh-64px)]">
          {/* Conversations List */}
          <div className="border-r border-border md:col-span-1 overflow-y-auto">
            <div className="p-4">
              <div className="relative mb-4">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="search"
                  placeholder="Search conversations"
                  className="w-full pl-10 pr-4 py-2 bg-muted rounded-lg text-sm"
                />
              </div>

              <div className="space-y-2">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      activeConversation === conversation.id
                        ? "bg-accent/10"
                        : "hover:bg-secondary"
                    }`}
                    onClick={() => setActiveConversation(conversation.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={conversation.user.avatar}
                          alt={conversation.user.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        {conversation.user.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium truncate">
                            {conversation.user.name}
                          </h3>
                          <span className="text-xs text-muted-foreground">
                            {conversation.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground truncate">
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread > 0 && (
                            <span className="h-5 w-5 bg-brand-red text-white rounded-full flex items-center justify-center text-xs">
                              {conversation.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Conversation */}
          {activeConversation ? (
            <div className="md:col-span-2 flex flex-col h-full">
              {/* Conversation Header */}
              <div className="border-b border-border p-4 flex items-center space-x-3">
                <img
                  src={conversations.find(c => c.id === activeConversation)?.user.avatar}
                  alt={conversations.find(c => c.id === activeConversation)?.user.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">
                    {conversations.find(c => c.id === activeConversation)?.user.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {conversations.find(c => c.id === activeConversation)?.user.online 
                      ? "Online" 
                      : "Offline"}
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Sample messages - would be dynamic in a real app */}
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Hey! I saw you have a physics textbook for trade? I'm looking for one for my class.</p>
                    <span className="text-xs text-muted-foreground mt-1 block">10:30 AM</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-brand-navy text-white rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Yes, I do! It's the Engineering Physics by HC Verma. Are you interested in trading?</p>
                    <span className="text-xs text-white/70 mt-1 block">10:32 AM</span>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Perfect! That's exactly what I need. I have a calculus textbook to trade. Would that work?</p>
                    <span className="text-xs text-muted-foreground mt-1 block">10:35 AM</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-brand-navy text-white rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">That works! When and where would you like to meet to trade?</p>
                    <span className="text-xs text-white/70 mt-1 block">10:36 AM</span>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="border-t border-border p-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 bg-muted rounded-full px-4 py-2 text-sm"
                  />
                  <button className="h-10 w-10 bg-brand-navy text-white rounded-full flex items-center justify-center">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="md:col-span-2 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">Your Messages</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with other students to discuss trades and campus life
                </p>
                <button className="px-4 py-2 bg-brand-navy text-white rounded-lg">
                  Start a conversation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
