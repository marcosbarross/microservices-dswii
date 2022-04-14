const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

app.get('/sub', (req, res) => {
    var op1 = parseInt(req.query.op1);
    var op2 = parseInt(req.query.op2);
    res.send((op1 - op2).toString());

});