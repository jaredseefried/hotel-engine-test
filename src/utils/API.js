import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  githubRepositories: function () {
    return axios.get("https://api.github.com/search/repositories?q=javascript&per_page=100&sort=stars&order=desc")
  },
  searchTerms: function (query) {
    return axios.get(
      "https://api.github.com/search/repositories?q=" +
      query +
      "&per_page=100&sort=stars&order=desc"
    );
  },
}