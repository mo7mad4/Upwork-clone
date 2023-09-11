const jsonServer = require("json-server"); // importing json-server 
const server = jsonServer.create(); // creating the server
const router = jsonServer.router("db.json"); // creating the router
const middlewares = jsonServer.defaults(); // creating the middlewares
const port = process.env.PORT || 3001; // setting the port to 3001 

server.use(middlewares); // using the middlewares
server.use(router); // using the router

server.listen(port); // listening to the port