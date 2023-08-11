function App() {
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");

  React.useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuote('"' + data.content + '"');
        setAuthor("— " + data.author);
      });
  };

  return (
    <div className="App">
      <div id="quote-box" className="card q-box">
        <div id="text">{quote}</div>
        <div id="author">{author}</div>
        <button>
          <a
            id="tweet-quote"
            target="_blank"
            href={
              "https://twitter.com/intent/tweet?&related=freecodecamp&text=" +
              encodeURIComponent(quote + "\n\n" + author)
            }
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </button>
        <button id="new-quote" onClick={getNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
