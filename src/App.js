import './App.css';
import Navigation from '../src/components/Navigation/Navigation'
import RepoList from './containers/RepoList/RepoList';

function App() {
  return (
    <div className="App">
      <Navigation />
      <RepoList />
    </div>
  );
}

export default App;
