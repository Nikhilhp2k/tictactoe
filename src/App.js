import './App.css';
import { Board } from './componets/Board';
import "./styles/root.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>TIC RAC TOEW</h1>
          <Board />
        </div>
      </header>
    </div>
  );
}

export default App;
