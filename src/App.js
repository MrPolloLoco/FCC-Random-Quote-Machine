// React:
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [color, setColor] = useState("#00ffff");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randomIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#fb6964",
      "#342224",
      "#472e32",
      "#bdbb99",
      "#77b1a9",
      "#73a857",
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[randomIndex]);
    setColor(colors[randomColorIndex]);
  };

  return (
    <div class="wrapper" style={{ backgroundColor: color }}>
      <div class="container" id="quote-box">
        <div class="card">
          <div class="card-header">Motivational Words</div>
          <div class="card-body">
            {randomQuote ? (
              <blockquote class="blockquote mb-0" id="text">
                <p class="card-text">&quot;{randomQuote.text}&quot;</p>
                <footer class="blockquote-footer" id="author">
                  {randomQuote.author || "No author"}
                </footer>
              </blockquote>
            ) : (
              <h2>Loading</h2>
            )}

            <div class="pt-3" id="btn-container">
              <a
                href={
                  "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                  encodeURIComponent(
                    '"' + randomQuote.text + '" ' + randomQuote.author
                  )
                }
                target="_blank"
                class="btn btn-primary" id="tweet-quote"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <button onClick={getNewQuote} class="btn btn-primary" id="new-quote">
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
