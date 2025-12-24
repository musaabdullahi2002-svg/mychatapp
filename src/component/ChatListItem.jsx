import React from 'react';
import './ChatListItem.css'; // For styling

const ChatListItem = ({ chat, onChatClick }) => {
  const { userName, profilePicUrl, lastMessage, unreadCount } = chat;
  const isUnread = unreadCount > 0;

  return (
    <div
      className={`chat-item ${isUnread ? 'unread' : ''}`}
      onClick={() => onChatClick(chat.id)}
    >
      <img src={profilePicUrl} alt={`${userName}'s profile`} className="profile-pic" />
      <div className="chat-details">
        <div className="chat-header">
          <span className="user-name">{userName}</span>
          {isUnread && <span className="unread-badge">{unreadCount}</span>}
        </div>
        <p className="last-message">{lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatListItem;
