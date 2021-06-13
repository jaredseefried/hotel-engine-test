import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation'
import ListHeader from './components/ListHeader';
import RepositoryItem from './components/RepositoryItem';
import API from './utils/API';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from '@emotion/react'

const override = css`
display: block;
margin: 10% auto;
color: pink;
`;


function App() {
  const [repoData, setRepoData] = useState([])
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    API.githubRepositories()
      .then(response => {
        setRepoData(response.data.items)
      })
      .then(() => {
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };


  const loadSearchResults = () => {
    setLoading(true)
    API.searchTerms(search)
      .then((response) => {
        setRepoData([...response.data.items])
      })
      .then(() => {
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Navigation
        handleFormSubmit={handleFormSubmit}
        handleInputChange={
          handleInputChange
        }
        search={search}
        onClick={() => {
          loadSearchResults()
        }}
      />
      <ListHeader />
      {
        loading ?
          <ClipLoader
            loading={loading}
            css={override}
            size={100}

          />
          :
          <ul>
            {repoData.map((object, index) => {
              return (
                <RepositoryItem
                  {...repoData}
                  key={index}
                  name={object.name}
                  description={object.description}
                  image={object.owner.avatar_url}
                  repoUrl={object.html_url}
                  stargazers_count={object.stargazers_count}
                  language={object.language}
                  owner={object.owner.login}
                  link={object.homepage}
                  created={object.created_at}
                />
              )
            })}
          </ul>

      }
    </div>
  );
}

export default App;
