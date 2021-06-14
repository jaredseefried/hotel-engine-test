import React, { useState, useEffect } from 'react';
import ListHeader from '../../components/ListHeader';
import RepositoryItem from '../../components/RepositoryItem';
import ClipLoader from "react-spinners/ClipLoader";
import API from '../../utils/API';
import { css } from '@emotion/react'
import Navigation from '../../components/Navigation'
import FilterList from '../../components/FilterList';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';

const override = css`
display: block;
margin: 10% auto;
`;

function RepoList(props) {
  const [repoData, setRepoData] = useState([]);

  const [languageDropdown, setLanguageDropdown] = useState([])

  const [search, setSearch] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [sorted, setSorted] = useState(false);

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
    showLanguages()
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

  const sortedStars = (e) => {
    e.preventDefault()
    const copiedArray = [...repoData]
    if (!sorted) {
      const ascArray = copiedArray.sort((a, b) => a.stargazers_count - b.stargazers_count)
      setRepoData(ascArray)
      setSorted(true)
    } else if (sorted) {
      const descArray = copiedArray.sort((a, b) => b.stargazers_count - a.stargazers_count)
      setRepoData(descArray)
      setSorted(false)
    }
  }

  const filterLanguages = (item) => {
    console.log(item.target.id);

  }

  const showLanguages = (e) => {
    const newArray = [...repoData]
    const uniqueArr = []
    const filterArray = newArray.filter((object) => {
      uniqueArr.push(object.language)
    })
    let values = [...new Set(uniqueArr)]
    setLanguageDropdown(values)
    // console.log(languageDropdown);
  }

  return (
    <div>
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
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {languageDropdown.map((item, i) => {
          return (
            <FilterList
              {...languageDropdown}
              key={i}
              language={item}
              filterLanguage={filterLanguages}
            />
          )
        })}
      </DropdownButton>
      <ListHeader
        sortStars={sortedStars}

      />



      {loading ?
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

export default RepoList;