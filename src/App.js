import { useState, useEffect } from "react";

import axios from "axios";
import Coin from "./coin";
import "./sass/styles.css";

function App() {
  const [coins, setCoins] = useState([]),
    [search, setSearch] = useState("");

  useEffect(() => {
    let url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";
    axios
      .get(url)
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err));
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    // console.log(coin);
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <main className="coin-app">
      <section className="coin-search">
        <h2 className="coin-text">Search a currency</h2>

        <form prevent>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>

        <section>
          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                volume={coin.total_volume}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                marketcap={coin.market_cap}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
