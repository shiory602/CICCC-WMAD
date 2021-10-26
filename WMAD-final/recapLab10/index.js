import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: `personal-access-token123` });
async function res() {

const response = await octokit.request("GET /orgs/{org}/repos", {
  org: "octokit",
  type: "private",
});
console.log(response)  
}

res()