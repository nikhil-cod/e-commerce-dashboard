const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/',(req, resp)=>{
    resp.send("Success");
})

app.listen(5000);