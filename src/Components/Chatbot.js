import React, { useEffect, useState } from 'react';
import './Chatbot.css';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userEntry, setUserEntry] = useState('');

  const handleMessageSend = (messageText, sender) => {
    setMessages((prevMessages) => [...prevMessages, { text: messageText, sender }]);
  };

  const sendPromptToServer = async () => {
    try {
      const response = await axios.post('http://localhost:3001/generate-response', { prompt: userEntry });

      console.log('Server response:', response.data.response);

      handleMessageSend(response.data.response, 'bot'); // Assuming the response contains the message from the bot
    } catch (error) {
      console.error('Error sending prompt to server:', error);
    }
  };

  useEffect(() => {
    sendPromptToServer();
  }, [userEntry]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message here..."
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleMessageSend(e.target.value, 'user');
              setUserEntry(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
};

export default Chatbot;
