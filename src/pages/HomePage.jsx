import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Link to="/beers">
        <img src="./beers.png" alt="beers-image" />
        <button>All Beers</button>
      </Link>
      <Link to="/random-beer">
        <img src="./random-beer.png" alt="random-beer-image" />
        <button>Random Beer</button>
      </Link>
      <Link to="/new-beer">
        <img src="./new-beer.png" alt="new-beer-image" />
        <button>New Beer</button>
      </Link>
    </>
  );
}

export default HomePage;
