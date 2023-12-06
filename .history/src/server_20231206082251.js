const express = required('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("welcome to my awesome app!");
});

app