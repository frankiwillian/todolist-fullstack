const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200))

app.listen(3000, () => console.log('Server runing on port 3000'));