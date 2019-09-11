import React from "react";
import { Link } from "@reach/router";

const Pet = ({ name, animal, breed, media, location, id }) => {
  let hero = media.length ? media[0].small : `http://placecorgi.com/300/300`;

  // previously we used a-tag here and the theme context was not being updated here
  // We then had to change to the Link tag.
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
