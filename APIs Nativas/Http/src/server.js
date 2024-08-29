import http from "http";

const PORT = 8080;

//create a server object:
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!<br>"); //write a response to the client

    res.write(`Consulta: ${req.url}`);

    res.end(); //end the response
  })
  .listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  }); //the server object listens on port 8080
