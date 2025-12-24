import '../styles/ChatListItem.css'

const ChatListItem = ({ chat, onChatClick }) => {
  const { userName, profilePic, lastMessage, unreadCount } = chat;
  const isUnread = unreadCount > 0;

  return (
    <div
      className={`chat-item ${isUnread ? 'unread' : ''}`}
      onClick={() => onChatClick(chat.id)}
    >
      <img src={profilePic} alt={`${userName}'s profile`} className="profile-pic" />
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
