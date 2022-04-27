import React, { useState, useEffect } from "react";
import "./CryptoNews.css";
const Cryptonews = () => {
  const [news, setNews] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      "X-RapidAPI-Key": "454edf1445msh6661a5c9cdd229dp1e5aaejsn1f284afc67f1",
    },
  };

  const fetchNews = () => {
    fetch(
      "https://bing-news-search1.p.rapidapi.com/news/search?q=crypto&freshness=Day&textFormat=Raw&safeSearch=Off",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setNews(response.value);
        console.log(response);
        console.log(response.value.image.thumbnail.contentUrl);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <div className="container my-3">
        <div className="row">
          {news.map((value, i) => {
            return (
              <div className="col-4 mediaQuery" key={i}>
                <div
                  className="card"
                  style={{
                    backgroundColor: "black",
                    marginTop: "20px",
                    color: "white",
                    boxShadow: "20px 10px 10px 5px #000000db",
                    borderRadius: "20px",
                    width: "18rem",
                  }}
                >
                  <div className="card-body" style={{ width: "fit-content" }}>
                    <img
                      src={
                        !value.image.thumbnail.contentUrl
                          ? "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/NPD7OUY3NJH7BFAZCPM3DWRO6A.jpg"
                          : value.image.thumbnail.contentUrl
                      }
                      className="card-img-top newImage"
                      alt="..."
                      style={{ borderRadius: "20px" }}
                    />
                    <h5
                      className="card-title"
                      style={{ color: "red", marginTop: "10px" }}
                    >
                      {" "}
                      {value.name}
                    </h5>

                    <p className="card-text" style={{ textAlign: "left" }}>
                      {value.description.slice(0, 140)}...
                    </p>
                    <p>
                      <br />
                      <a
                        href={value.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-danger text-center"
                      >
                        Read More
                      </a>
                    </p>
                    <p className="card-text">
                      <small>
                        By{" "}
                        {!value.provider[0].name
                          ? "Unknown"
                          : value.provider[0].name}{" "}
                        on {value.datePublished}
                      </small>
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
};

export default Cryptonews;
