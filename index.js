const express = require('express');
const multer = require('multer');
const app = express();
const autoSellRouter = require('./routes/autoSell');

const upload = multer({ dest: 'uploads/' }); // Temporary storage for screenshots

app.post('/upload', upload.single('screenshot'), (req, res) => {
    const screenshotPath = req.file.path;
    console.log(`Screenshot uploaded at: ${screenshotPath}`);
    // Trigger trade execution logic here
    res.send('Screenshot received and trade executed!');
});
app.use('/auto-sell', autoSellRouter);

app.listen(3000, () => console.log('Server running on port 3000'));

// Before deployment, all the necessary variables will be changed
// the telegram bot is ready jsut waiting to add commands at: t.me/bonkbot_auto_trading_bot
