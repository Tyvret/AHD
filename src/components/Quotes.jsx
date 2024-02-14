import React from "react";
import { quotes } from "../data";

export function Quotes(props) {
  const [randomQuote, setRandomQuote] = React.useState(
    quotes[Math.floor(Math.random()) * quotes.length]
  );
  const [fade, setFade] = React.useState(false);

  React.useEffect(() => {
    const getRandomQuote = () => {
      let randomNr = Math.floor(Math.random() * quotes.length);

      setFade(true);
      setTimeout(() => {
        setRandomQuote(quotes[randomNr]);
        setFade(false);
      }, 1000);
    };

    const interval = setInterval(getRandomQuote, 5000);

    return () => clearInterval(interval);
  }, []);

  const style = {
    transition: "opacity 1s",
    opacity: fade ? 0 : 1,
  };

  return (
    <div className={`quotes-container ${props.fadeIn ? "fade-in" : ""}`}>
      <p style={style} className="quote">
        <em>"{randomQuote}"</em>
      </p>
    </div>
  );
}
