const express = require('express');
const app = express();
const PORT = preocess.env.PORT || 3000;
app.use(morgan('dev'));

app.listen(PORT, console.log('listening', PORT));

app.get('/:string', (req, res)=> {
    const { string } = req.params;
    const { r, w } = req.query;
    const newStr = sting.replace(r, w)
    res.send(newStr);
})