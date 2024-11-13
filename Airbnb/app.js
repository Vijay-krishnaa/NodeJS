const express = require("express");
const userRouter = require("./Routes/userrRouter");
const hostRouter = require("./Routes/hostRouter");
const app = express();
app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(userRouter);
app.use(hostRouter);
app.use((req, res, next) => {
  res.status(404).send(`<h1>Page not found</h1> 
    `);
});

const port = 3009;
app.listen(port, () => {
  console.log(`Server is runnig at http://localhost:${port}`);
});
