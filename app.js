const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>HELLO WORLD!!!</h1>');
})

app.listen(5001, () => {
    console.log("app listening on port 5000!")
});