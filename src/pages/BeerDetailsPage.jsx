import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const [oneBeer, setOneBeer] = useState(null);

  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setOneBeer(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="t-center">
      <h3>{oneBeer.name} beer details</h3>
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

export default BeerDetailsPage;
