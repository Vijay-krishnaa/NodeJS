// console.log("hi");
const fs = require("fs");
fs.writeFile("output.txt",'writing File',(err)=>{
  if(err)console.log("error found");
    
    
  
  else console.log('file written successfully');
  
});