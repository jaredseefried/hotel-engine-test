//Dependencies
import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from '@emotion/react'
import { DropdownButton } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'

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

    //Let Loading State to True so we see a spinning Icon showing data is being retrieved
    setLoading(true)

    // Call API to guthub Repo API
    API.githubRepositories()
      .then(response => {
        //Set data to RepoData State
        setRepoData(response.data.items)
      })
      .then(() => {
        //Call Function to Filter the available languages from the response and call function
        showLanguages()
      })
      .then(() => {
        //Once Data is initialized, set loading state to false and removing spinning Icon
        setLoading(false)
      })
      //Catch an errors and Console.log them.
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

  //Function to show the available languages in RepoData then extract them to setLanguageDropdown State
  const showLanguages = () => {

    // Copy the State
    const newArray = [...repoData]

    // Create empty array to push Languages to
    const uniqueArr = []

    //Filter the object and push the language to empty array
    newArray.filter((object) => {
      if (object.language) {
        //Push element to array
        uniqueArr.push(object.language)
      }
    })

    // create Unique set of Array
    let values = [...new Set(uniqueArr)]

    //Set the state with the values
    setLanguageDropdown(values)
  }

  // Function to load the results a user searched for
  const loadSearchResults = () => {

    //Set loading State to True
    setLoading(true)

    // Call API with specific user generated search
    API.searchTerms(search)
      .then((response) => {
        //Set the data to what was search/queries by use
        setRepoData([...response.data.items])
        //Show available languages
        showLanguages()
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

    // If sorted equals False
    if (!sorted) {
      // Sort the data Ascending Order, set the RepoData list to the sorted criteria, and set sorted to true
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

    //Copy the RepoData and create empty arrays to hold data we want to show in array and hold the data we don't want in array2. The objective of array2 is to hold for a user makes a new language selection, the state will change to the new data selection. I have not be able to get the ladder to work. The current functionality only filters once. 
    const newArray = [...repoData]
    const array = []
    const array2 = []

    //filter data by option selected
    newArray.filter((object) => {

      // if the language in the object and the value equal, change the data to show only that language
      if (object.language === value) {
        array.push(object)
        setRepoData(array)
      } else {
        array2.push(object)
        showLanguages()
      }
    })
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
        }}
      />

      {/* React-Bootstrap dropdown button using the .map method to dynamically render a list of available languages to choose and when a language is selected, the repository list is rendered with repository items matching selection. */}
      <DropdownButton id="dropdown-basic-button" title="Select Language">
        {languageDropdown.map((item, i) => {
          return (
            <FilterList
              {...languageDropdown}
              key={i}
              language={item}
              filterLanguage={
                filterLanguages
              }
            />
          )
        })}
      </DropdownButton>

      {/* The column 'stars' in the ListHeader Component takes in a sortedStars function prop when clicked sorts the stars column by ascending and descending order. */}
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
        <Col>
          <ul>
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
        </Col>
      }
    </div>
  );
}

export default RepoList;