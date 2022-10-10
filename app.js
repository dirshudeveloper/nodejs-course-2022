 
const {area,circumference} = require("./circle"); 
const PORT = 4000;
const http = require("http");

const server = http.createServer((req,res) =>{
    res.write("hello node");
    res.end();
})
console.log(`server is running at http://localhost:${PORT}`);
server.listen(PORT);
