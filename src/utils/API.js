//Dependencies
import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {

  //Function to call API Repositories, return by best match
  githubRepositories: function () {
    return axios.get("https://api.github.com/search/repositories?q=javascript&per_page=100&sort=stars&order=desc")
  },

  //Function which calls the github API on a specific query made by the client
  searchTerms: function (query) {
    return axios.get(
      "https://api.github.com/search/repositories?q=" +
      query +
      "&per_page=100&sort=stars&order=desc"
    );
  },
}