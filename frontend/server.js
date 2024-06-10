const express = require('express');
const next = require('next');
const path = require('path');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    
    // Serve the HTML landing page
    server.get('/about-us', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'about-us.html'));
    });
    
    // Serve Next.js pages
    server.get('*', (req, res) => {
        return handle(req, res);
    });
    
    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
