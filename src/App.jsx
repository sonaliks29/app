import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import './App.css';  // Ensure you import the CSS file

const API_KEY = "";

function App() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am a chatbot",
      sender: "ChatGPT",
      direction: "incoming"
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    };

    // Update our messages state
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Typing indicator
    setTyping(true);

    // Process message to ChatGPT
    await processMessageToChatGPT([...messages, newMessage]);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content: "Explain like a professional"
    };

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    })
    .then((response) => response.json())
    .then(async (data) => {
      const botMessage = {
        message: data.choices[0].message.content,
        sender: "ChatGPT",
        direction: "incoming"
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);

      // Save the ChatGPT's response to Firestore using the cloud function
      await fetch('https://us-central1-rex-chatbot-6d89d.cloudfunctions.net/addMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: chatMessages[chatMessages.length - 1].message,
          answer: data.choices[0].message.content,
        }),
      });

      setTyping(false);
    })
    .catch((error) => {
      console.error("Error:", error);
      setTyping(false);
    });
  }

  return (
    <div className="App">
      <div className="center-container">
        <div style={{ position: "relative", height: "800px", width: "700px" }}>
          <MainContainer>
            <ChatContainer>
              <MessageList typingIndicator={typing ? <TypingIndicator content="Chatbot is typing" /> : null}>
                {messages.map((message, i) => (
                  <Message key={i} model={message} />
                ))}
              </MessageList>
              <MessageInput placeholder="Type message here" onSend={handleSend} />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
