// import logo from './logo.svg';
// import './App.css';
import "./Components/ButtonComponent";
import ButtonComponent from "./Components/ButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Testo di Esempio</h1>
        {<ButtonComponent buttonText="Pulsante 1" />}
        {<ButtonComponent buttonText="Pulsante 2" />}
      </header>
    </div>
  );
}

export default App;
