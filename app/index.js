var express = require('express');

const app = express()

app.listen(3000, () => console.log('Application running at: http://localhost:3000'))

app.get('/ping', (req, res) => res.send("PONG"))
