# 🤖 Chat-Bot

> An intelligent AI-powered chatbot built with n8n automation workflows, featuring smart conversational AI agents, YouTube link handling, and webhook-based communication.

[![n8n](https://img.shields.io/badge/automation-n8n-orange)](https://n8n.io/)
[![AI Agents](https://img.shields.io/badge/powered%20by-AI%20Agents-blue)](https://github.com/kumamihir/Chat-Bot)
[![Status](https://img.shields.io/badge/status-active-success)](https://github.com/kumamihir/Chat-Bot)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Features](#-features)
- [How It Works](#-how-it-works)
  - [AI Agents Explained](#-ai-agents-explained)
  - [n8n Integration](#-n8n-integration)
- [System Flow](#-system-flow)
- [Setup & Installation](#-setup--installation)
- [Usage](#-usage)
- [Configuration](#-configuration)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

---

## 🎯 Overview

This Chat-Bot is a sophisticated conversational AI system that leverages **n8n workflow automation** and **AI agents** to create intelligent, context-aware responses. The bot can handle various types of user queries, process YouTube links, and route conversations through specialized AI agents for optimal responses.

### What Makes This Special? ✨

- 🧠 **Smart AI Agents**: Multiple specialized agents handle different types of queries
- 🔄 **n8n Automation**: Seamless workflow orchestration without code
- 🎥 **YouTube Integration**: Automatic link detection and processing
- 🪝 **Webhook-Based**: Real-time communication through webhooks
- 🎯 **Context-Aware**: Maintains conversation context for better responses

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Chat-Bot Architecture                    │
└─────────────────────────────────────────────────────────────┘

         User Input
            │
            ▼
    ┌───────────────┐
    │   Webhook     │◄────── External Triggers
    │   Receiver    │
    └───────┬───────┘
            │
            ▼
    ┌───────────────────────────────────────┐
    │         n8n Workflow Engine           │
    │  ┌─────────────────────────────────┐  │
    │  │   Input Processing Node         │  │
    │  └──────────────┬──────────────────┘  │
    │                 │                      │
    │                 ▼                      │
    │  ┌─────────────────────────────────┐  │
    │  │   Content Type Detector         │  │
    │  │   (YouTube? Text? Command?)     │  │
    │  └──────────┬──────────────────────┘  │
    │             │                          │
    │    ┌────────┴────────┐                │
    │    ▼                 ▼                │
    │ YouTube          AI Agent             │
    │ Handler          Router               │
    │    │                 │                │
    │    │        ┌────────┴────────┐       │
    │    │        ▼                 ▼       │
    │    │   ┌─────────┐      ┌─────────┐  │
    │    │   │General  │      │Specific │  │
    │    │   │AI Agent │      │AI Agent │  │
    │    │   └────┬────┘      └────┬────┘  │
    │    │        │                │        │
    │    └────────┴────────────────┘        │
    │                 │                      │
    │                 ▼                      │
    │  ┌─────────────────────────────────┐  │
    │  │   Response Formatter            │  │
    │  └──────────────┬──────────────────┘  │
    └─────────────────┼─────────────────────┘
                      │
                      ▼
              ┌───────────────┐
              │   Response    │
              │   to User     │
              └───────────────┘
```

---

## ✨ Features

- ✅ **Multi-Agent AI System**: Intelligent routing to specialized AI agents
- ✅ **YouTube Link Detection**: Automatically identifies and processes YouTube URLs
- ✅ **Context Preservation**: Maintains conversation history for coherent responses
- ✅ **Webhook Integration**: Real-time event-driven architecture
- ✅ **n8n Visual Workflows**: Easy to understand and modify automation flows
- ✅ **Scalable Design**: Add new agents and capabilities without code changes
- ✅ **Error Handling**: Robust error management and fallback responses

---

## 🔧 How It Works

### 🤖 AI Agents Explained

**What are AI Agents?**

AI agents are specialized, autonomous components that handle specific types of tasks or queries. Think of them as expert team members, each with their own expertise:

```
┌─────────────────────────────────────────────────────────┐
│              AI Agents Team Structure                    │
└─────────────────────────────────────────────────────────┘

    ┌─────────────────────────────────────────┐
    │       Central Agent Router              │
    │     (Analyzes incoming requests)        │
    └───────────────┬─────────────────────────┘
                    │
        ┌───────────┼───────────┬─────────────┐
        │           │           │             │
        ▼           ▼           ▼             ▼
   ┌────────┐  ┌────────┐  ┌────────┐  ┌──────────┐
   │General │  │YouTube │  │Command │  │  Custom  │
   │Convo   │  │Expert  │  │Handler │  │  Agent   │
   │Agent   │  │Agent   │  │Agent   │  │  (You!)  │
   └───┬────┘  └───┬────┘  └───┬────┘  └────┬─────┘
       │           │           │             │
       └───────────┴───────────┴─────────────┘
                    │
                    ▼
            📝 Unified Response
```

**Agent Workflow:**

1. **Request Arrives** 📨
   - User sends a message
   - Webhook captures the input

2. **Agent Router Analyzes** 🔍
   - Examines message content
   - Determines message type (question, command, URL, etc.)
   - Checks for special keywords or patterns

3. **Agent Selection** 🎯
   - Routes to appropriate specialized agent
   - General Conversation Agent → Normal chat
   - YouTube Agent → Video link processing
   - Command Agent → Special commands

4. **Agent Processing** ⚙️
   - Selected agent processes the request
   - Uses AI/ML models for understanding
   - Generates contextually relevant response

5. **Response Delivery** 📤
   - Response formatted and sent back
   - Conversation context saved for future

### 🔄 n8n Integration

**What is n8n?**

n8n is a powerful workflow automation tool that connects different services and APIs without writing code. It's like LEGO blocks for automation! 🧱

```
┌────────────────────────────────────────────────────────┐
│            n8n Workflow Components                      │
└────────────────────────────────────────────────────────┘

  ┌──────────────┐       ┌──────────────┐       ┌──────────────┐
  │   TRIGGER    │──────▶│   PROCESS    │──────▶│   ACTION     │
  │   NODES      │       │   NODES      │       │   NODES      │
  └──────────────┘       └──────────────┘       └──────────────┘
        │                      │                       │
        ▼                      ▼                       ▼
  - Webhook              - IF/Else              - HTTP Request
  - Schedule             - Code Node            - Set Variables
  - Email                - AI Agent Call        - Send Response
  - Incoming Call        - Data Transform       - Database Save
```

**How This Bot Uses n8n:**

```
╔══════════════════════════════════════════════════════════════╗
║                    n8n Workflow Design                        ║
╚══════════════════════════════════════════════════════════════╝

    START
      │
      ▼
┌─────────────────┐
│  Webhook Node   │ ◄──── Receives user message
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Function Node  │ ◄──── Parse and clean input
│  (Pre-Process)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   IF Node       │ ◄──── Check if YouTube link?
│  (Conditional)  │
└────┬───────┬────┘
     │       │
  YES│       │NO
     │       │
     ▼       ▼
  ┌──────┐ ┌───────────────┐
  │YouTube│ │  AI Agent     │
  │Handler│ │  HTTP Request │
  └───┬──┘ └───────┬───────┘
      │            │
      └──────┬─────┘
             │
             ▼
      ┌────────────┐
      │  Function  │ ◄──── Format response
      │  (Format)  │
      └─────┬──────┘
            │
            ▼
      ┌────────────┐
      │  Response  │ ◄──── Send back to user
      │  Node      │
      └────────────┘
            │
            ▼
          END
```

**n8n Advantages for This Bot:**

1. **Visual Programming** 👀
   - See the entire workflow at a glance
   - Easy to understand and modify
   - No complex code to maintain

2. **Easy Integration** 🔌
   - Connect to 200+ services
   - Built-in nodes for common tasks
   - Custom code when needed

3. **Real-Time Processing** ⚡
   - Instant webhook responses
   - Asynchronous execution
   - Scalable architecture

4. **Error Management** 🛡️
   - Built-in error handling
   - Retry mechanisms
   - Fallback workflows

---

## 🌊 System Flow

### Complete Message Flow Diagram

```
┌──────────────────────────────────────────────────────────────┐
│              End-to-End Message Flow                          │
└──────────────────────────────────────────────────────────────┘

👤 User                                              🤖 Chat-Bot
  │                                                       │
  │  1. "Tell me about AI"                               │
  ├──────────────────────────────────────────────────────▶│
  │                                                       │
  │                               2. Webhook receives     │
  │                                  & triggers workflow  │
  │                                       ├───────────────┤
  │                                       │ n8n Workflow  │
  │                                       │               │
  │                                   3. Parse input      │
  │                                       │               │
  │                                   4. Detect type      │
  │                                       │               │
  │                              5. Route to AI Agent     │
  │                                       │               │
  │                                       ▼               │
  │                              ┌──────────────────┐    │
  │                              │  AI Agent API    │    │
  │                              │  - Analyzes      │    │
  │                              │  - Generates     │    │
  │                              │  - Returns       │    │
  │                              └────────┬─────────┘    │
  │                                       │               │
  │                              6. Format response      │
  │                                       │               │
  │  7. "AI stands for Artificial                        │
  │      Intelligence..."                                 │
  │◀──────────────────────────────────────────────────────┤
  │                                                       │
  ▼                                                       ▼
```

### Detailed Processing Steps

```
┌─────────────────────────────────────────────────────────────┐
│         Internal Processing Pipeline                         │
└─────────────────────────────────────────────────────────────┘

Step 1: INPUT RECEPTION
┌────────────────────────────────┐
│ Raw Input: "Check this out:   │
│ https://youtube.com/watch?v=..." │
└────────────┬───────────────────┘
             │
             ▼
Step 2: PARSING & VALIDATION
┌────────────────────────────────┐
│ ✓ Valid format                 │
│ ✓ Content extracted            │
│ ✓ Metadata captured            │
└────────────┬───────────────────┘
             │
             ▼
Step 3: CONTENT ANALYSIS
┌────────────────────────────────┐
│ Contains: URL pattern          │
│ Type: YouTube link             │
│ Action: Extract video ID       │
└────────────┬───────────────────┘
             │
        ┌────┴────┐
        │ ROUTER  │
        └────┬────┘
             │
    ┌────────┴────────┐
    │                 │
    ▼                 ▼
┌────────┐      ┌──────────┐
│YouTube │      │ General  │
│Handler │      │ AI Agent │
└───┬────┘      └─────┬────┘
    │                 │
    ▼                 ▼
Step 4: PROCESSING
┌────────────────────────────────┐
│ • Fetch video metadata         │
│ • Generate summary             │
│ • Create response              │
└────────────┬───────────────────┘
             │
             ▼
Step 5: RESPONSE GENERATION
┌────────────────────────────────┐
│ "Great video! This is about... │
│ Key points: ..."               │
└────────────┬───────────────────┘
             │
             ▼
Step 6: DELIVERY
┌────────────────────────────────┐
│ Send via webhook response      │
│ Log conversation               │
│ Update context                 │
└────────────────────────────────┘
```

---

## 🚀 Setup & Installation

### Prerequisites

- Node.js (v14 or higher)
- n8n installed (locally or cloud)
- API keys for AI services (OpenAI, Anthropic, etc.)
- Basic understanding of webhooks

### Step 1: Install n8n

```bash
# Install n8n globally
npm install -g n8n

# Or using Docker
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  n8nio/n8n
```

### Step 2: Set Up Environment

```bash
# Clone this repository
git clone https://github.com/kumamihir/Chat-Bot.git
cd Chat-Bot

# Configure environment variables
export N8N_BASIC_AUTH_USER=your_username
export N8N_BASIC_AUTH_PASSWORD=your_password
export OPENAI_API_KEY=your_openai_key
```

### Step 3: Configure n8n Workflow

1. **Start n8n**:
   ```bash
   n8n start
   ```

2. **Access n8n Interface**:
   - Open browser: `http://localhost:5678`

3. **Import Workflow**:
   - Navigate to Workflows → Import
   - Use the webhook URL provided by n8n
   - Configure AI agent endpoints

4. **Set Up Webhook**:
   - Copy the webhook URL from the Webhook node
   - Format: `http://localhost:5678/webhook/chatbot`

### Step 4: Configure AI Agents

```javascript
// Example AI Agent Configuration
{
  "generalAgent": {
    "endpoint": "https://api.openai.com/v1/chat/completions",
    "model": "gpt-3.5-turbo",
    "temperature": 0.7
  },
  "youtubeAgent": {
    "endpoint": "https://api.youtube.com/v3/videos",
    "apiKey": "YOUR_YOUTUBE_API_KEY"
  }
}
```

---

## 💡 Usage

### Basic Usage

```bash
# Send a message to the chatbot
curl -X POST http://localhost:5678/webhook/chatbot \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hello, tell me about artificial intelligence",
    "userId": "user123"
  }'
```

### Example Interactions

**General Conversation:**
```
User: What is machine learning?
Bot: Machine learning is a subset of artificial intelligence that 
     enables systems to learn and improve from experience without 
     being explicitly programmed...
```

**YouTube Link Processing:**
```
User: Check out this video: https://youtube.com/watch?v=dQw4w9WgXcQ
Bot: Great video! This is "Rick Astley - Never Gonna Give You Up"
     It's a music video with 1B+ views. Would you like a summary?
```

### Integration with External Apps

```javascript
// Example: Discord Bot Integration
const axios = require('axios');

async function sendToChatBot(message) {
  const response = await axios.post('http://localhost:5678/webhook/chatbot', {
    message: message,
    userId: 'discord_user_123',
    platform: 'discord'
  });
  return response.data;
}
```

---

## ⚙️ Configuration

### n8n Workflow Nodes Configuration

```yaml
workflow:
  name: "AI Chat-Bot"
  nodes:
    - type: webhook
      name: "Incoming Message"
      path: "/chatbot"
      method: "POST"
    
    - type: function
      name: "Process Input"
      code: |
        // Extract and clean message
        const message = $input.item.json.message;
        return { message: message.trim() };
    
    - type: if
      name: "Check YouTube Link"
      condition: "{{ $json.message.includes('youtube.com') }}"
    
    - type: httpRequest
      name: "AI Agent Call"
      url: "{{ $env.AI_AGENT_ENDPOINT }}"
      method: "POST"
      headers:
        Authorization: "Bearer {{ $env.OPENAI_API_KEY }}"
```

### Environment Variables

```bash
# n8n Configuration
N8N_PORT=5678
N8N_PROTOCOL=http
N8N_HOST=localhost

# AI Service Keys
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...

# Bot Configuration
BOT_NAME=ChatBot
BOT_LANGUAGE=en
MAX_CONTEXT_LENGTH=10

# Webhook Settings
WEBHOOK_PATH=/webhook/chatbot
WEBHOOK_METHOD=POST
```

---

## 🐛 Troubleshooting

### Common Issues

**1. Webhook Not Responding**
```
Problem: Webhook returns 404 or timeout
Solution: 
  - Verify n8n is running: curl http://localhost:5678
  - Check webhook path in n8n workflow
  - Ensure workflow is activated (toggle switch)
```

**2. AI Agent Not Responding**
```
Problem: Empty or error responses from AI
Solution:
  - Verify API keys are set correctly
  - Check API rate limits
  - Review n8n execution logs
  - Test AI endpoint separately
```

**3. YouTube Link Not Detected**
```
Problem: YouTube links treated as regular text
Solution:
  - Check IF node condition: youtube.com OR youtu.be
  - Verify regex pattern in function node
  - Test with different URL formats
```

**4. Workflow Execution Errors**
```
Problem: Workflow fails during execution
Solution:
  - Check n8n logs: n8n start --tunnel
  - Review error node configuration
  - Add error handling nodes
  - Test individual nodes manually
```

### Debug Mode

```bash
# Start n8n in debug mode
N8N_LOG_LEVEL=debug n8n start

# View execution details in n8n UI
# Navigate to: Executions → Click on failed execution
```

### Testing Individual Components

```bash
# Test webhook endpoint
curl -X POST http://localhost:5678/webhook-test/chatbot \
  -H "Content-Type: application/json" \
  -d '{"message": "test"}'

# Test AI agent directly
curl https://api.openai.com/v1/chat/completions \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

---

## 🎨 Architecture Highlights

### Why This Design?

```
┌────────────────────────────────────────────────────┐
│         Design Principles                          │
└────────────────────────────────────────────────────┘

    🎯 MODULARITY           🔄 SCALABILITY
         │                      │
    Individual agents      Add new agents
    work independently     without disrupting
         │                 existing ones
         │                      │
         └──────────┬───────────┘
                    │
                    ▼
              ┌──────────┐
              │  Result  │
              └──────────┘
         Easy to maintain
         Easy to extend
         Easy to debug
```

### Agent Communication Pattern

```
Agent A                Agent B              Agent C
   │                      │                    │
   │  Request context     │                    │
   ├─────────────────────▶│                    │
   │                      │                    │
   │  ◀─── Context ───────┤                    │
   │                      │                    │
   │  Process & respond   │                    │
   │                      │  Need specialist   │
   │                      ├───────────────────▶│
   │                      │                    │
   │                      │ ◀─── Result ───────┤
   │                      │                    │
   │  ◀─── Final response ┤                    │
   │                      │                    │
   ▼                      ▼                    ▼
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Contribution Ideas

- 🎨 Add new AI agent types
- 🔧 Improve error handling
- 📚 Enhance documentation
- 🎯 Add more integration examples
- 🌍 Multi-language support
- 🎭 Custom response templates

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **n8n** - For the amazing workflow automation platform
- **OpenAI** - For powerful AI capabilities
- **Community** - For feedback and contributions

---

## 📞 Contact & Support

- **GitHub**: [kumamihir/Chat-Bot](https://github.com/kumamihir/Chat-Bot)
- **Issues**: [Report a bug](https://github.com/kumamihir/Chat-Bot/issues)
- **Discussions**: [Join the conversation](https://github.com/kumamihir/Chat-Bot/discussions)

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

Made with ❤️ using AI Agents and n8n

```
   🤖
  /│\   Thanks for using Chat-Bot!
   │
  / \
```

</div>
