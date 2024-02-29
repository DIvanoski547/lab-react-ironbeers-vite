import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
        
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="t-center">
      <h1>List of Beers</h1>
      
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <img className="img-wrap" src={beer.image_url} alt="beer_image" />
            <Link to={`/beers/${beer._id}`}>
              <h4>{beer.name}</h4>
            </Link>
            <p>Tagline: {beer.tagline}</p>
            <p>Contributed By: {beer.contributed_by}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
