import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="t-center">
      <h1>Homepage</h1>
      <Link to="/beers">
        <img src="./beers.png" alt="beers-image" />
        <br />
        <button>All Beers</button>
      </Link>
      <br />
      <Link to="/random-beer">
        <img src="./random-beer.png" alt="random-beer-image" />
        <br />
        <button>Random Beer</button>
      </Link>
      <br />
      <Link to="/new-beer">
        <img src="./new-beer.png" alt="new-beer-image" />
        <br />
        <button>New Beer</button>
      </Link>
    </div>
  );
}

export default HomePage;
