
import { useState } from "react";
import { Search, Send, Phone, Video, Info, Smile, Paperclip, MessageSquare } from "lucide-react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  
  // Mock data for chat messages
  const chats = [
    {
      id: 1,
      user: {
        id: 101,
        name: "Rohit Sharma",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        isOnline: true,
        lastSeen: null
      },
      messages: [
        { id: 1, text: "Hey, are you still selling that engineering textbook?", sender: "them", time: "10:32 AM" },
        { id: 2, text: "Yes, it's still available! Are you interested?", sender: "me", time: "10:34 AM" },
        { id: 3, text: "Great! What condition is it in?", sender: "them", time: "10:36 AM" },
        { id: 4, text: "It's in excellent condition. I've only used it for one semester and there are no markings or highlights.", sender: "me", time: "10:38 AM" },
        { id: 5, text: "Perfect! How much are you asking for it?", sender: "them", time: "10:40 AM" },
      ],
      unread: 0
    },
    {
      id: 2,
      user: {
        id: 102,
        name: "Priya Patel",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        isOnline: false,
        lastSeen: "Today at 9:15 AM"
      },
      messages: [
        { id: 1, text: "Hi there! I saw your post about forming a study group for calculus.", sender: "them", time: "Yesterday" },
        { id: 2, text: "Hey Priya! Yes, we're meeting on Thursday at the library around 5 PM.", sender: "me", time: "Yesterday" },
      ],
      unread: 1
    },
    {
      id: 3,
      user: {
        id: 103,
        name: "Amit Kumar",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        isOnline: true,
        lastSeen: null
      },
      messages: [
        { id: 1, text: "Are you coming to the tech event tomorrow?", sender: "them", time: "Monday" },
        { id: 2, text: "I'm not sure yet. What time does it start?", sender: "me", time: "Monday" },
        { id: 3, text: "It starts at 3 PM in the main auditorium. They'll be showcasing some cool AI projects!", sender: "them", time: "Monday" },
      ],
      unread: 2
    }
  ];
  
  const currentChat = chats.find(chat => chat.id === selectedChat);
  
  return (
    <div className="pt-20 h-[calc(100vh-80px)] flex animate-fade-in">
      <div className="flex flex-col md:flex-row h-full w-full">
        {/* Chat List Sidebar */}
        <div className="w-full md:w-80 border-r border-border flex-shrink-0 bg-card overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border flex-shrink-0">
            <h2 className="text-xl font-bold mb-4">Messages</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations"
                className="w-full py-2 pl-9 pr-4 bg-accent/10 rounded-lg text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="flex-grow overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`p-3 flex items-center border-b border-border cursor-pointer transition-colors ${
                  selectedChat === chat.id ? "bg-accent/10" : "hover:bg-secondary"
                }`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div className="relative mr-3">
                  <img
                    src={chat.user.avatar}
                    alt={chat.user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.user.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card"></span>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium truncate">{chat.user.name}</h3>
                    <span className="text-xs text-muted-foreground">
                      {chat.messages[chat.messages.length - 1].time}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <p className="text-sm text-muted-foreground truncate flex-1">
                      {chat.messages[chat.messages.length - 1].sender === "me" ? "You: " : ""}
                      {chat.messages[chat.messages.length - 1].text}
                    </p>
                    
                    {chat.unread > 0 && (
                      <span className="ml-2 bg-brand-red text-white text-xs rounded-full h-5 min-w-5 flex items-center justify-center px-1">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat Window */}
        {currentChat ? (
          <div className="flex-1 flex flex-col bg-background overflow-hidden">
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center justify-between flex-shrink-0">
              <div className="flex items-center">
                <div className="relative mr-3">
                  <img
                    src={currentChat.user.avatar}
                    alt={currentChat.user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {currentChat.user.isOnline && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-card"></span>
                  )}
                </div>
                
                <div>
                  <h3 className="font-medium">{currentChat.user.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {currentChat.user.isOnline ? "Online" : currentChat.user.lastSeen}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-foreground transition-colors">
                  <Video className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-foreground transition-colors">
                  <Info className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Message List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {currentChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender !== "me" && (
                    <img
                      src={currentChat.user.avatar}
                      alt={currentChat.user.name}
                      className="w-8 h-8 rounded-full object-cover mr-2 self-end"
                    />
                  )}
                  
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                      message.sender === "me"
                        ? "bg-brand-navy text-white rounded-br-none"
                        : "bg-accent/10 rounded-bl-none"
                    }`}
                  >
                    <p>{message.text}</p>
                    <span className={`text-xs ${message.sender === "me" ? "text-brand-navy/70" : "text-muted-foreground"} block mt-1`}>
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Message Input */}
            <div className="p-4 border-t border-border flex items-center flex-shrink-0">
              <button className="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-foreground transition-colors">
                <Paperclip className="h-5 w-5" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-accent/10 rounded-full py-2 px-4 mx-2 text-sm"
              />
              <button className="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-foreground transition-colors">
                <Smile className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full bg-brand-navy text-white ml-1">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center bg-background text-center p-4">
            <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium mb-2">No conversation selected</h3>
            <p className="text-muted-foreground max-w-md">
              Select a conversation from the list or start a new one to begin messaging
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
