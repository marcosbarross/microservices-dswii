const express = require('express');
const app = express();
const port = 3000;

app.get('/sum', (req, res) => {
    
    const op1 = parseFloat(req.query.op1);
    const op2 = parseFloat(req.query.op2)
    
    res.send((op1 + op2).toString());
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
