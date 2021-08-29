const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to weather app');    
})
app.listen( 8000,() => {
    console.log("Weather App started listening to port :8000");
});