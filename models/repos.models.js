const mongoose = require("mongoose");
const axios = require("axios");

const repoSchema = new mongoose.Schema({ repos: Array });

const Repo = mongoose.model("Repo", repoSchema);
resposGithubs = async () => {
  const response = await axios.get(process.env.GITHUB_URL);

  repo = response.data.map((repo) => {
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
  repo = repo.filter(
    (repo) => repo.name !== "api-porfolio" && repo.name !== "porfolio"
  );

  return repo;
};

const saveRepo = async () => {
  let repos = await resposGithubs();
  console.log(repos);
  const newRepo = new Repo({ repos });
  await newRepo.save();
};

const getRepo = async () => {
  const repos = await Repo.find();
  for(let repo of repos){
    console.log(repo.repos);
    return repo.repos;
  }
};

exports.saveRepo = saveRepo;
exports.getRepo = getRepo;
