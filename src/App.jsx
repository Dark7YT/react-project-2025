import {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

function App() {

    const API_URL = import.meta.env.VITE_API_URL;

  const [cryptos, setCryptos] = useState();

  useEffect(() => {
      axios.get(`${API_URL}assets`)
        .then(data => setCryptos(data.data.data))
        .catch(() => console.error("Error fetching data"));
  }, []);

    if (!cryptos) { return <p>Loading...</p> }

  return (
      <>
        <h1>cryptography List - live update</h1>

        <ol>
          {
            cryptos.map(({id, name, symbol, priceUsd}) => (
                <li key={id}>
                  {name} - {symbol} - ${priceUsd}
                </li>
            ))
          }
        </ol>
      </>
  )
}

export default App
