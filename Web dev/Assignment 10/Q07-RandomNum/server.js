const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let randomNum = Math.floor(Math.random() * 100 ) + 1
res.json({RandomNum: randomNum})
})

const port = 5000;
app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
});