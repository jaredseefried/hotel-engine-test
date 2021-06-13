import React, { useState, useEffect } from 'react';
import ListHeader from '../../components/ListHeader/ListHeader';
import RepositoryItem from '../../components/RepositoryItem/RepositoryItem';
import API from '../../utils/API';
import './RepoList.css'

function RepoList(props) {

  const [repoData, setRepoData] = useState([])

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRepos()
  }, [])

  const loadRepos = () => {
    API.githubRepositories()
      .then(response => {
        setRepoData(response.data.items)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <>
      <ListHeader />
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
    </>
  );
}

export default RepoList;