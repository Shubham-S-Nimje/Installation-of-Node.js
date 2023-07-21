const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    const displayMsg = fs.readFileSync("data.txt", "utf8");
    // console.log(displayMsg.toString())

    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><Title>My First Page</Title></head>");
    res.write(`<body><h1>${displayMsg.toString()}</h1></body>`);
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="myMessage"><button type="submit">Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[0];
      //   fs.writeFileSync("data.txt", message, (err) => {
      //     res.statusCode = 302;
      //     res.setHeader("Location", "/");
      //     return res.end();
      //   });
      
      fs.writeFileSync("data.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

// module.exports = requestHandler;

module.exports = {
    handler: requestHandler,
};

// exports.handle = requestHandler;