const http = require("http")
const app = require("./app")

const server = http.createServer(app);

// user service will run on port 3001
server.listen(3001, () => console.log("user service is running on port 3001"))