import './App.css';
import Navigation from '../src/components/Navigation/Navigation'
import RepoList from './containers/RepoList/RepoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <RepoList />
    </div>
  );
}

export default App;
