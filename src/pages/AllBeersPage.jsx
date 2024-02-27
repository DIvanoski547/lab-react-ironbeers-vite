import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setBeers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Beers</h2>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt="beer-image" className="img-wrap" />
            <br />
            <Link to="/beers/:beerId">{beer.name}</Link>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
