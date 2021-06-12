import axios from 'axios'

export default {
  githubRepositories: function (query) {
    return axios.get("https://api.github.com/search/repositories?q=javascript&per_page=100&sort=stars&order=desc")
  }
}