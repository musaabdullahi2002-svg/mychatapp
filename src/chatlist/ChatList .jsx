import React, { useState } from 'react';
import ChatListItem from '../component/ChatListItem';
import { chatItems } from '../data/chatitems';

const ChatList = () => {
  const [chats, setChats] = useState(chatItems);

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
