//Dependencies
import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from '@emotion/react'
import { DropdownButton, Dropdown } from 'react-bootstrap';

//Components
import ListHeader from '../../components/ListHeader';
import RepositoryItem from '../../components/RepositoryItem';
import Navigation from '../../components/Navigation'
import FilterList from '../../components/FilterList';

//API
import API from '../../utils/API';

//CSS
import './style.css'

//emotion css
const override = css`
display: block;
margin: 10% auto;
`;

//Main Page functional component which shows all the containers and components.
function RepoList(props) {

  //Repository Data State
  const [repoData, setRepoData] = useState([]);

  //Back to results State 
  const [backToResults, setBackToResults] = useState([])

  //Select Language Dropdown Filter State
  const [languageDropdown, setLanguageDropdown] = useState([])

  //Search Input State
  const [search, setSearch] = useState("");

  //Loading State
  const [loading, setLoading] = useState(false);

  //Sorted Functionality State
  const [sorted, setSorted] = useState(false);

  // useEffect Hook to load Data and call functions on page load.
  useEffect(() => {
    //Set Loading State to True so we see a spinning Icon showing data is being retrieved
    setLoading(true)

    // Call API to github Repo API
    API.githubRepositories()
      .then(response => {
        const array = []

        //Set the response to RepoData state and backToResults State
        const data = response.data.items;
        setRepoData(data)
        setBackToResults(data)

        //Filter the response by language and push the object to an array
        data.filter((object) => {
          array.push(object.language);
        })

        //Remove duplicates
        const uniqueList = [...new Set(array)]

        //Set the language dropdown to the unique set
        setLanguageDropdown(uniqueList)
      })
      .then(() => {
        //Once Data is initialized, set loading state to false to remove spinning Icon
        setLoading(false)
      })
      //Catch an errors and console.log them.
      .catch((error) => {
        console.log(error);
      });

  }, [])

  // Handle the change of the search input for when a user searches a specific repository
  const handleInputChange = event => {
    //Set the search State to the value typed
    setSearch(event.target.value);
  };

  //Handle the for submission to not reload onclick
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  // Function to load the results queried
  const loadSearchResults = () => {
    //Set loading State to True
    setLoading(true)

    // Call API with specific user generated search
    API.searchTerms(search)
      .then((response) => {
        const array = []

        //Set the data to what was searched
        const data = [...response.data.items]
        setRepoData(data)
        setBackToResults(data)

        //Filter the available languages to set in the dropdown menu
        data.filter((object) => {
          array.push(object.language);
        })

        //Create a unique list and set the state
        const uniqueList = [...new Set(array)]
        setLanguageDropdown(uniqueList)
      })
      .then(() => {
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Function to sort the stars column
  const sortedStars = (e) => {
    e.preventDefault()

    //Copy State
    const copiedArray = [...repoData]

    // If sorted equals False, Sort the data by Ascending Order, set the RepoData list to the sorted criteria, and set sorted to true
    if (!sorted) {
      const ascArray = copiedArray.sort((a, b) => a.stargazers_count - b.stargazers_count)
      setRepoData(ascArray)
      setSorted(true)

      // If sorted is True, sort by Descending, set the data state and list sorted as false
    } else if (sorted) {
      const descArray = copiedArray.sort((a, b) => b.stargazers_count - a.stargazers_count)
      setRepoData(descArray)
      setSorted(false)
    }
  }

  //Function to filter the data list by Language selected in the dropdown menu
  const filterLanguages = (item) => {

    //Target the value in the dropdown list
    const value = item.target.id;

    const duplicated = [...backToResults]
    const array = []

    //Set the state back to the original results onClick
    if (value === 'revert') {
      setRepoData(backToResults)

      //Find the object that the language matches the value selected in the dropdown
    } else {
      duplicated.find((object) => {
        if (object.language === value) {
          array.push(object)
        }
      })
      setRepoData(array)
    }
  }

  return (
    <div>
      {/* Navigation Component which passes props down to handle the input change and the search functionality to query API with specific criteria */}
      <Navigation
        handleFormSubmit={handleFormSubmit}
        handleInputChange={
          handleInputChange
        }
        search={search}
        onClick={() => {
          loadSearchResults()
          // showLanguages()
        }}
      />

      {/* React-Bootstrap dropdown button using the .map method to dynamically render a list of available languages to choose and when a language is selected, the repository list is rendered with repository items matching the selection. */}
      <DropdownButton
        id="dropdown-basic-button"
        title="Select Language">
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
        <Dropdown.Item
          onClick={filterLanguages}
          className="dropdown-item"
          value='revert'
          id='revert'
        >
          Back To Results
        </Dropdown.Item>
      </DropdownButton>

      {/* The column 'stars' in the ListHeader Component takes in a sortedStars function prop and when clicked, it sorts the stars column by ascending and descending order. */}
      <ListHeader
        sortStars={sortedStars}
      />

      {/* Ternary operator which shows the page spinner when data is being retrieved from the API */}
      {loading ?
        <ClipLoader
          loading={loading}
          css={override}
          size={100}
        />
        :

        <ul id='repo-item-ul'>
          {/* javascript .map method to dynamically render a list of Repository items and set props to be passed down the tree */}
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