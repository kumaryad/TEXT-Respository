const http = require("http");

const result = [1, 2, 3, 4];
const server = http.createServer(function (req, res) {
    console.log(req.url);
 if(req.url === '/') {
    //nothing to do here
    res.write(JSON.stringify(result));

   
 } else if(req.url === "/create") {
   result.push(Math.random() *100 );
   res.write(JSON.stringify(result));

 } else if(req.url === "/update"){
   result[0]++;
   res.write(JSON.stringify(result));

 } else if (req.url === "/delete"){
    result.pop();
    res.write(JSON.stringify(result));

 }
  res.end();
});
server.listen(3000, () => console.log("listening to port 3000"));              
