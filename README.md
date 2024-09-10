Ethereum Deposit Tracker
Overview
The Ethereum Deposit Tracker is a Node.js application designed to monitor and record ETH deposits on the Beacon Deposit Contract. It uses the Alchemy API to interact with the Ethereum blockchain and sends notifications via Telegram when new deposits are detected.

Features
Real-Time Deposit Tracking: Monitors the Beacon Deposit Contract for new ETH deposits.
Telegram Notifications: Sends alerts to a specified Telegram chat when new deposits are detected.
Latest Block Number: Prints the latest block number to ensure the system is tracking live data.
Installation
Clone the Repository:

Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables: Create a .env file in the root directory with the following content:

env
Copy code
ALCHEMY_API_URL=https://eth-mainnet.g.alchemy.com/v2/
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-telegram-chat-id
Run the Application:

bash
Copy code
node index.js
How It Works
Tracking Deposits:

The application connects to the Ethereum blockchain using the Alchemy API.
It fetches the latest block number and checks for new deposits in the Beacon Deposit Contract.
Telegram Notifications:

When a new deposit is detected, a message is sent to the specified Telegram chat using the Telegram Bot API.
Example Output
yaml
Copy code
Latest Block Number: 
Message sent: {
  ok: true,
  result: {
    message_id: 13,
    from: {
      id: ,
      is_bot: true,
      first_name: 'Deposittracker',
      username: 'Depotrack_bot'
    },
    chat: { id: , first_name: '', type: 'private' },
    date: 1725982698,
    text: 'Hello from your Ethereum Deposit Tracker!'
  }
}
Message sent: {
  ok: true,
  result: {
    message_id: 14,
    from: {
      id: ,
      is_bot: true,
      first_name: 'Deposittracker',
      username: 'Depotrack_bot'
    },
    chat: { id: , first_name: '', type: 'private' },
    date: ,
    text: 'New deposit detected!'
  }
}
