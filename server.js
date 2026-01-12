const express = require ('express');
const mysql = require ('mysql2');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send(' Server is running!');  
});

app.listen(5000, ()=> console.log("running on port 5000"));