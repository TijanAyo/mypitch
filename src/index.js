const http = require('http')
const app = require('./app')
const connectDB = require('./config/db')

const server = http.createServer(app)
const PORT = process.env.PORT || 5000


server.on("listening", () => {
    console.log(`listening on http://localhost:${PORT}`);
    connectDB()
});
  
server.listen(PORT);