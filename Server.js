const express = require('express')
const app = express();

app.listen(3000,()=>{
    console.log("Started");
    
})

app.get('/',(req,res)=>{
    res.send("ISTE Jindabad");
    
})