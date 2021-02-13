const express = require("express");
const app = express();

//direct to your static folder
app.use(express.static("public"));

//For hard coding the  line
/*
app.get('/', function (req, res) {
  res.send('Hello World')
})
*/

//Server Listen
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
