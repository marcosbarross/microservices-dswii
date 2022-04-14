var express = require('express');

const app = express()

app.listen(3000, () => console.log('Application running at: http://localhost:3000'))

app.get('/calc', (req, res) => res.send('calc está funcionando! Versão 1.0'))
