import logo from './logo.svg';
import './App.css';
import { Calculator } from './components/calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Calculator</h3>
        <text>Press the advanced switch to toggle to the advanced calculator that supports: <br/>Factorial, exponents, modulo, log2 and decimals.</text>
        <br/>
        <Calculator />
      </header>
    </div>
  );
}



export default App;
