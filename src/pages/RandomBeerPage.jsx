import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RandomBeersPage() {
  const [oneBeer, setOneBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setOneBeer(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="t-center">
      {oneBeer && (
        <div>
          <img src={oneBeer.image_url} alt="beer_img" className="img-wrap" />
          <h4>{oneBeer.name}</h4>
          <p>{oneBeer.tagline}</p>
          <p>{oneBeer.first_brewed}</p>
          <p>{oneBeer.attenuation_level}</p>
          <p>{oneBeer.description}</p>
          <p>{oneBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default RandomBeersPage;
