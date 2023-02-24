import logo from './logo.svg';
import './App.css';
import {Box} from '@primer/react'
import {PageLayout} from '@primer/react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Box>
          <PageLayout>
            <h1>Does this work?</h1>
          </PageLayout>
        </Box>
      </header>

    </div>
  );
}

export default App;
