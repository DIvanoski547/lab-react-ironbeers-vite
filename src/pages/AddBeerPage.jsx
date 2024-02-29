import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", requestBody)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setAttenuationLevel("");
        setContributedBy("");
        navigate("/")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="t-center">
      <h3>Add New Beer</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <label htmlFor="first_brewed">FirstBrewed:</label>
        <input
          type="text"
          name="first_brewed"
          value={firstBrewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />
        <br />
        <label htmlFor="attenuation_level">Attenuation level:</label>
        <input
          type="number"
          name="attenuation_level"
          value={attenuationLevel}
          onChange={(e) => setAttenuationLevel(e.target.value)}
        />
        <br />
        <label htmlFor="contributed_by">Contributed by:</label>
        <input
          type="text"
          name="contributed_by"
          value={contributedBy}
          onChange={(e) => setContributedBy(e.target.value)}
        />
        <br />
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
