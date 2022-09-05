import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">

        <Weather city="Kyiv" />
        <footer>
          This app was coded by me as
          <a href="https://github.com/gannasy/react-weather-search" target="_blank"> open-sourced</a>
        </footer>
      </div>
    </div>
  );
}


