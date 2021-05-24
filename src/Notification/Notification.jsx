import React from 'react';

const Notification = ({ notification }) => {
  return (
    <div
      className={`notification ${notification.visible ? 'visible' : 'invisible'} ${
        notification.hideForever && 'hideForever'
      } 
      ${'order' + notification.order} `}>
      <div className={`notification__stripe ${notification.params.type}`}></div>
      {notification.params.type === 'error' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.7782 7.22943C16.4824 6.93364 16.0045 6.93364 15.7088 7.22943L12 10.9306L8.29124 7.22184C7.99545 6.92605 7.51763 6.92605 7.22184 7.22184C6.92605 7.51763 6.92605 7.99545 7.22184 8.29124L10.9306 12L7.22184 15.7088C6.92605 16.0045 6.92605 16.4824 7.22184 16.7782C7.51763 17.0739 7.99545 17.0739 8.29124 16.7782L12 13.0694L15.7088 16.7782C16.0045 17.0739 16.4824 17.0739 16.7782 16.7782C17.0739 16.4824 17.0739 16.0045 16.7782 15.7088L13.0694 12L16.7782 8.29124C17.0664 8.00303 17.0664 7.51763 16.7782 7.22943Z"
            fill="#FF6562"
          />
          <circle cx="12" cy="12" r="11" stroke="#FF6562" strokeWidth="2" />
        </svg>
      )}
      {notification.params.type === 'success' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6ZM16.656 7.548L9.6 14.604L7.344 12.348C6.876 11.88 6.12 11.88 5.652 12.348C5.184 12.816 5.184 13.572 5.652 14.04L8.76 17.148C9.228 17.616 9.984 17.616 10.452 17.148L18.36 9.24C18.828 8.772 18.828 8.016 18.36 7.548C17.892 7.08 17.124 7.08 16.656 7.548Z"
            fill="#5BC044"
          />
        </svg>
      )}
      <div className="notification__content">
        <h4 className="notification-title">{notification.params.title}</h4>
        <div className="notification-text">{notification.params.text}</div>
      </div>
    </div>
  );
};

export default Notification;
