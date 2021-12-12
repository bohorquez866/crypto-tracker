import React from "react";

const coin = ({
  name,
  symbol,
  price,
  image,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <article className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h3>{name}</h3>
          <p className="coin-symbol">{symbol}</p>
        </div>

        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">
              {priceChange ? priceChange.toFixed(2) : ""}%
            </p>
          ) : (
            <p className="coin-percent green">
              +{priceChange ? priceChange.toFixed(2) : ""}%
            </p>
          )}
          <p>Mkt Cap: ${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </article>
  );
};

export default coin;
