const http = require('http');
const url = require('url');

const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Parse the request URL, setting the second argument to 'true' to parse the query string into an object
  const parsedUrl = url.parse(req.url, true);
  const queryData = parsedUrl.query;
  const pathname = parsedUrl.pathname;

  let result = 20;

  //Routing based on the URL pathname
  if (pathname === '/calculate') {
    const operation = queryData.operation;
    const num1 = parseFloat(queryData.num1);
    const num2 = parseFloat(queryData.num2);

    if (!operation || isNaN(num1) || isNaN(num2)) {
      result = 'Error: Missing or invalid parameters. Usage: /calculate?operation=[add|subtract|multiply|divide]&num1=[number]&num2=[number]';
    } else {
      switch (operation) {
        case 'add':
          result = `Result: ${num1} + ${num2} = ${num1 + num2}`;
          break;
        case 'subtract':
          result = `Result: ${num1} - ${num2} = ${num1 - num2}`;
          break;
        case 'multiply':
          result = `Result: ${num1} * ${num2} = ${num1 * num2}`;
          break;
        case 'divide':
          if (num2 !== 0) {
            result = `Result: ${num1} / ${num2} = ${num1 / num2}`;
          } else {
            result = 'Error: Division by zero';
          }
          break;
        default:
          result = 'Error: Invalid operation. Choose add, subtract, multiply, or divide.';
      }
    }
  } else {
    result = 'Welcome to the Node.js Calculator. Use the /calculate endpoint with operation, num1, and num2 parameters.';
  }

  res.writeHead(200);
  res.end(result)
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});