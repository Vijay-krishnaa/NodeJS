const http = require('http')
const reqhandler =require ('./calc')

const server=http.createServer(reqhandler);

const port = 3003
server.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
  
})