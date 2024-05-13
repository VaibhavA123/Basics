const express = require('express');
const app = express();

app.get("/",(req,res) => {
    let { query } = req.query;
    res.send(query);
});

app.listen(8080,() => {
    console.log(`Server is listening to port 8080`);
});