const express = require('express');
const app = express();

const port = process.env.PORT || 80;

app.use(express.static(__dirname + './../dist/'));


app.listen(port, ()=> {
  console.log('Server started on port ' + port);
});
