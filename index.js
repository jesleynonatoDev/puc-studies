const express = require('express');
const app = express.app();
const port = 1987;

app.get('/', (req, res) => {
    console.log('req on get method');
});

app.listen(port, () => {
    console.log(`server listen on http://localhost:${port}`);
})