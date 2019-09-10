import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // Something to note: React hooks should never go into if statements, for or while loops
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    // this is going to schedule the given
    // function to be run after the first render.
    // this is an asynchronous operation
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      setBreeds(apiBreeds.map(({ name }) => name));
    }, console.error);
    // To understand the effects, read this: https://reactjs.org/docs/hooks-effect.html
  }, [setBreed, animal]);

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>

        <AnimalDropDown />
        <BreedDropDown />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
