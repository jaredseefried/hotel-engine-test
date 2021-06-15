//Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//CSS
import './App.css';

//Components
import RepoList from './containers/RepoList';

// App component using React Router Dom to Route to the main page
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={RepoList} />
      </div>
    </Router>
  );
}

export default App;
