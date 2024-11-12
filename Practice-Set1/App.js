const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("<h1>first middleware</h1>");
  next();
});
app.use((req, res, next) => {
  console.log("<h1>Second  middleware</h1>", req.url, req.method);
  next();
});
// app.use((req,res,next)=>{
//   res.send('<h1>third  middleware</h1>',req.url,req.method);

//   })
app.get("/contact-us", (req, res, next) => {
  res.send(`
      
      <html lang="en">
  <head>
    <title>Contact Us</title>
  </head>

  <body>
    <form action="/contact-us" method="post">
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter your username"
      />
      <input type="email" name="email" id="email" placeholder="email" />
      <button type="submit">Login</button>
    </form>
  </body>
</html>

      
      `);
});
app.post("/contact-us", (req, res, next) => {
  res.send(`Thanks for detail`);
});
const port = 5173;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
