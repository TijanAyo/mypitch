import http from 'http'
import app from "./app"
import connectDB from './config/db'

const server = http.createServer(app)
const PORT = process.env.PORT || 5000


process.env.NODE_ENV !== "production" && server.on("listening", () => {
    console.log(`listening on http://localhost:${PORT}`);
    connectDB()
});
  
server.listen(PORT);