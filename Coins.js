import React, { useState, useEffect } from "react";
import "./Coins.css";

export default function Coins() {
  const [data, setData] = useState([]);
  const [stats, setstats] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      "X-RapidAPI-Key": "454edf1445msh6661a5c9cdd229dp1e5aaejsn1f284afc67f1",
    },
  };

  const fetchCoins = () => {
    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setstats(response.data.stats);

        setData(response.data.coins);
        console.log(response);

        console.log(response.data.coins[0]);
        console.log();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <div>
      {/* <div style={{ margin: "auto" }}>
        <div>CryptoStata</div>
        <div>
          <span>{stats.total}</span> <span>{stats.total24hVolume}</span>
        </div>
        <div>
          <span>{stats.totalCoins}</span> <span>{stats.totalExchanges}</span>
        </div>
        <div>
          <span>{stats.totalMarketCap}</span> <span>{stats.totalMarkets}</span>
        </div>
      </div> */}
      <div className="container my-3 ">
        <div className="row">
          {data.slice(0, 27).map((value) => {
            return (
              <div className="col-4  mediaQuery ">
                <div
                  className="card  mediaQuery"
                  style={{
                    backgroundColor: "#000000db",
                    marginTop: "40px",
                    color: "gray",
                    boxShadow: "20px 10px 10px 5px #000000db",
                    borderRadius: "20px",
                    width: "80%",
                  }}
                >
                  <img
                    src={value.iconUrl}
                    className="card-img-top"
                    alt="..."
                    style={{
                      borderRadius: "100%",
                      width: "100px",
                      height: "100px",

                      margin: "auto",
                      marginTop: "20px",
                    }}
                  />
                  <div className="card-body">
                    {/* <h5 className="card-title" style={{ color: "red" }}></h5> */}
                    <h6> {value.symbol}</h6>
                    <p>
                      {value.name}
                      <br />
                      <b> USD</b> ${parseFloat(value.price).toFixed(3)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
