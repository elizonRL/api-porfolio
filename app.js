const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", async (req, res) => {

  const response = await axios.get(
    'https://api.github.com/users/elizonRL/repos'
  );
  if(response.data.name !== 'api-porfolio' || response.data.name !== 'portfolio'){
    const repos = response.data;
    res.send(repos);
  }
  
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
