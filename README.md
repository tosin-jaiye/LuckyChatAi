# 🤖 LuckyChatAI - Intelligent Multilingual AI Assistant

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.12.5-orange?logo=firebase)](https://firebase.google.com/)
[![AWS Bedrock](https://img.shields.io/badge/AWS-Bedrock-orange?logo=amazon-aws)](https://aws.amazon.com/bedrock/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An intelligent AI-powered chatbot assistant named **Luna** that provides 24/7 customer support with multi-language capabilities. Built with AWS Bedrock (Claude 3), Firebase, and Google Cloud Translate.

![LuckyChatAI Demo](https://via.placeholder.com/800x400?text=LuckyChatAI+Demo)

---

## ✨ Features

- **🤖 AI-Powered Conversations** - Powered by AWS Bedrock with Claude 3 Sonnet model
- **🌍 Multi-language Support** - Automatic translation to and from multiple languages using Google Cloud Translate
- **🔐 Secure Authentication** - Firebase Authentication with email/password and password reset
- **💾 Chat History** - Persistent conversation history stored in Firebase Firestore
- **⚡ Real-time Responses** - Instant AI-generated responses to user queries
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices
- **🎨 Modern UI** - Clean and intuitive chat interface
- **💡 Smart Suggestions** - Quick-start conversation prompts for common queries

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework for the frontend and API routes |
| **React 18** | UI components and state management |
| **AWS Bedrock** | AI model hosting (Claude 3 Sonnet) |
| **Firebase Auth** | User authentication and management |
| **Firebase Firestore** | NoSQL database for chat history |
| **Google Cloud Translate** | Multi-language translation API |
| **Elasticsearch** | Search and analytics (optional) |

---

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Firebase Project** with Authentication and Firestore enabled
- **AWS Account** with Bedrock access
- **Google Cloud Project** with Translation API enabled

---

## 🚀 Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/Goodluck07/LuckyChatAi.git
cd LuckyChatAi
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set Up Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
# AWS Bedrock Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_MODEL_ID=anthropic.claude-3-sonnet-20240229-v1:0

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Google Cloud Translate Configuration
GOOGLE_APPLICATION_CREDENTIALS=path/to/your/service-account-key.json
GOOGLE_CLOUD_PROJECT_ID=your_google_cloud_project_id
\`\`\`

### 4. Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable **Authentication** → Email/Password provider
4. Enable **Firestore Database**
5. Copy your Firebase config to \`.env.local\`

### 5. Set Up AWS Bedrock

1. Go to [AWS Console](https://console.aws.amazon.com/)
2. Navigate to **AWS Bedrock**
3. Request access to **Claude 3 Sonnet** model (if not already granted)
4. Create IAM credentials with Bedrock permissions
5. Add credentials to \`.env.local\`

### 6. Set Up Google Cloud Translate

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable **Cloud Translation API**
3. Create a **Service Account** and download the JSON key
4. Set the path to the key file in \`.env.local\`

### 7. Run the Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

\`\`\`
LuckyChatAi/
├── components/
│   └── CustomModal.js          # Sign out confirmation modal
├── pages/
│   ├── api/
│   │   ├── invoke-model.js     # AWS Bedrock API endpoint
│   │   └── translate.js        # Google Translate API endpoint
│   ├── auth.js                 # Authentication page
│   └── index.js                # Main chat interface
├── styles/
│   ├── globals.css             # Global styles
│   ├── chat.module.css         # Chat page styles
│   └── auth.module.css         # Auth page styles
├── utils/
│   ├── awsClient.js            # AWS SDK configuration
│   └── firebaseConfig.js       # Firebase configuration
├── .env.local                  # Environment variables (create this)
├── package.json
└── README.md
\`\`\`

---

## 🎯 Usage

### Sign Up / Sign In

1. Navigate to the authentication page
2. Create a new account or sign in with existing credentials
3. Use "Forgot Password?" to reset your password if needed

### Chat with Luna

1. After signing in, you'll see the chat interface
2. Click on quick suggestions or type your message
3. Luna will respond in your language automatically
4. All conversations are saved to your chat history

### Manage Chat History

- Click **"Show History"** to view all past conversations
- Click **"Clear History"** to delete all saved conversations
- Your current session is automatically saved

---

## 🔒 Security

- All sensitive credentials are stored in environment variables
- Firebase Authentication handles secure user management
- AWS credentials are never exposed to the client
- Password reset functionality is built-in

---

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Add all environment variables from \`.env.local\`
5. Deploy!

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

---

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Goodluck Badewole**
- GitHub: [@Goodluck07](https://github.com/Goodluck07)
- Email: badewolegoodluck55@gmail.com

---

## 🙏 Acknowledgments

- AWS Bedrock for powerful AI capabilities
- Firebase for authentication and database services
- Google Cloud Translate for multi-language support
- Anthropic's Claude 3 for intelligent conversations

---

## 📞 Support

If you encounter any issues or have questions:
- Open an [Issue](https://github.com/Goodluck07/LuckyChatAi/issues)
- Email: badewolegoodluck55@gmail.com

---

**Made with ❤️ by Goodluck Badewole**
