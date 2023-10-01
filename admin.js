const express = require('express');
const fs = require('fs');
const router=express.Router();

router.get('/login', (req, res) => {
    res.send(`
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="Enter your username">
            <button type="submit">Login</button>
        </form>
    `);
});
router.post('/login', (req, res) => {
    const { username } = req.body;
    // Store username in local storage (you can use cookies or sessions for better user management)
    res.cookie('username', username);
    res.redirect('/');
});
router.get('/', (req, res) => {
    // Retrieve the username from local storage or cookies
    const username = req.cookies.username || 'Anonymous';

    // Read the chat log file and display the messages
    fs.readFile('chat.log', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            data = ''; // Set data to an empty string if there was an error reading the file
        }

        res.send(`
            <h1>Welcome, ${username}!</h1>
            <div id="messages">
                ${data}
            </div>
            <form action="/send" method="POST">
                <input type="text" name="message" placeholder="Type your message">
                <button type="submit">Send</button>
            </form>
        `);
    });
});
router.post('/send', (req, res) => {
    const { message } = req.body;
    const username = req.cookies.username || 'Anonymous';

    // Append the message to a file with the sender's username
    fs.appendFile('chat.log', `${username}: ${message}\n`, (err) => {
        if (err) {
            console.error(err);
        }
    });

    res.redirect('/');
});




module.exports=router;