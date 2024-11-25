// import logo from './logo.svg';
// import './App.css';
import "./Components/ButtonComponent";
import ButtonComponent from "./Components/ButtonComponent";
import "./Components/ImageComponent"
import ImageComponent from "./Components/ImageComponent"

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
      
        {<ImageComponent src="https://placecats.com/300/200"/>}
        {<ButtonComponent buttonText="Pulsante 1" />}
        {<ImageComponent src="https://placecats.com/200/200"/>}
        {<ButtonComponent buttonText="Pulsante 2" />}
      </header>
    </div>
  );
}

export default App;
