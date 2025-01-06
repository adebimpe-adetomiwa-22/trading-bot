const axios = require('axios');

async function executeTrade(screenshotData) {
    try {
        const response = await axios.post(
            'https://api.tradingplatform.com/sell',
            {
                // Example payload
                token: 'your-api-token',
                screenshot: screenshotData,
            }
        );
        console.log('Trade executed:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error executing trade:', error.message);
        throw new Error('Failed to execute trade');
    }
}

module.exports = executeTrade;
