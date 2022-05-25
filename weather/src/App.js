import logo from './logo.svg';
import './App.css';
import weatherApi from './api/weatherApi';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const fetProduct = async() => {
      const weatherApir = await weatherApi.getAll();
      console.log(weatherApir);
    }
    fetProduct();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
