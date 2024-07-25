# React + Vite

Rex Chatbot

Description
Rex is a chatbot application built with React, Firebase, and the ChatGPT API. This application provides an interactive interface for users to chat with an AI-powered bot, offering a seamless and engaging experience.

Features
- Interactive chatbot interface
- Firebase integration for authentication and data storage
- Responsive design
- Modern and clean UI

Project Structure
rex/
├── app/
│   ├── .eslintrc.cjs
│   ├── .firebaserc
│   ├── .git/
│   ├── .gitignore
│   ├── dist/
│   ├── firebase.json
│   ├── firestore.indexes.json
│   ├── firestore.rules
│   ├── index.html
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── public/
│   ├── README.md
│   ├── src/
│   ├── vite.config.js
├── node_modules/
├── package.json
├── package-lock.json

Getting Started

Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later)
  
Installation
1. Clone the repository:
   git clone git@github.com:sonaliks29/dashboard.git
   cd rex/app
2. Install dependencies:
   npm install
3. Set up Firebase:
   Create a Firebase project on the Firebase Console.
   Update the firebase.json, .firebaserc, and firestore.rules files with your Firebase project configuration.
4. Run the application:
   npm start
5. Open your browser and navigate to http://localhost:3000 to see the application in action.

Usage
- Click the 'Start Chat' button on the landing page to initiate a chat session with the chatbot.
- Interact with the chatbot through the chat interface.
- The chatbot responses are powered by the ChatGPT API, providing intelligent and context-aware replies.

Deployment
To deploy the application, you can use Firebase Hosting:
1. Build the project:
   npm run build
2. Deploy to Firebase:
   firebase deploy

Acknowledgements:
React
Firebase
ChatGPT API
