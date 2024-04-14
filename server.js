const app = require('./app');
const http = require('http');

// Define the port number
const port = process.env.PORT || 3000;

// Create the HTTP server
const server = http.createServer(app);

// Start listening for incoming requests
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
