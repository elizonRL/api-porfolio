const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();
require('./connet');
const repos = require('./models/repos.models');



const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  
   let repo =  await repos.getRepo();
   console.log(repo);
  /*const response = await axios.get(
    process.env.GITHUB_URL
  );

    repo =response.data.map(repo => {
      return {
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        forks: repo.forks,
        watchers: repo.watchers,
        stars: repo.stargazers_count,
        open_issues: repo.open_issues,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        pushed_at: repo.pushed_at,
      };
    });
    repo = repo.filter((repo) => repo.name !== "api-porfolio" && repo.name !== "porfolio");*/
    res.send(repo);
  
  
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
