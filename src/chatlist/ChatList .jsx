import React, { useState } from 'react';
import ChatListItem from './ChatListItem';

const ChatList = () => {
  const [chats, setChats] = useState(initialChats);

  const handleChatClick = (chatId) => {
    
    setChats(chats.map(chat =>
      chat.id === chatId ? { ...chat, unreadCount: 0 } : chat
    ));
   
  };

  return (
    <div className="chat-list-container">
      {chats.map(chat => (
        <ChatListItem
          key={chat.id}
          chat={chat}
          onChatClick={handleChatClick}
        />
      ))}
    </div>
  );
};

export default ChatList;
