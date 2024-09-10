require('dotenv').config();
const Web3 = require('web3');

// Initialize Web3 with an HTTP provider
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ALCHEMY_API_URL));

async function trackDeposits() {
    try {
        console.log('Tracking deposits...');

        // Replace this with the contract address you want to monitor
        const contractAddress = '0x00000000219ab540356cBB839Cbe05303d7705Fa';
        
        // Example call to check the latest block number (just for testing)
        const latestBlock = await web3.eth.getBlockNumber();
        console.log('Latest Block Number:', latestBlock);

        // Here you can add code to track deposits and interact with the contract
        
    } catch (error) {
        console.error('Error tracking deposits:', error);
    }
}

trackDeposits();
const axios = require('axios');

const TELEGRAM_API_URL = ``; #enter the bot link
const CHAT_ID = '5125137090';

async function sendTelegramMessage(text) {
  try {
    const response = await axios.post(TELEGRAM_API_URL, {
      chat_id: CHAT_ID,
      text: text
    });
    console.log('Message sent:', response.data);
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

// Example usage
sendTelegramMessage('Hello from your Ethereum Deposit Tracker!');
async function trackDeposits() {
  try {
    const latestBlock = await web3.eth.getBlockNumber();
    console.log('Latest Block Number:', latestBlock);

    // Replace this with actual event tracking logic
    // If new deposits are detected
    sendTelegramMessage('New deposit detected!');

  } catch (error) {
    console.error('Error tracking deposits:', error);
  }
}
