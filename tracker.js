const Web3 = require('web3');
require('dotenv').config();

// Initialize web3 with your Ethereum provider (Alchemy/Infura)
const web3 = new Web3(process.env.RPC_URL);

// Beacon deposit contract address
const beaconDepositContract = '0x00000000219ab540356cBB839Cbe05303d7705Fa';

// Function to track deposits
const trackDeposits = async () => {
  try {
    // Get the latest block
    const latestBlock = await web3.eth.getBlockNumber();
    
    console.log(`Listening for new deposits from block ${latestBlock}`);

    // Subscribe to new blocks
    web3.eth.subscribe('newBlockHeaders', async (error, block) => {
      if (error) {
        console.error('Error subscribing to new blocks:', error);
        return;
      }
      console.log(`New block received. Block # ${block.number}`);

      // Get transactions in the block
      const blockData = await web3.eth.getBlock(block.number, true);
      blockData.transactions.forEach(tx => {
        if (tx.to && tx.to.toLowerCase() === beaconDepositContract.toLowerCase()) {
          console.log('Deposit detected:', tx);
          // Save the deposit information (you can add database logic here)
        }
      });
    });
  } catch (err) {
    console.error('Error in tracking deposits:', err);
  }
};

module.exports = { trackDeposits };
