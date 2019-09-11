import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  // Something to note: React hooks should never go into if statements, for or while loops
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme] = useContext(ThemeContext);

  const requestPets = async () => {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  };

  useEffect(() => {
    // this is going to schedule the given
    // function to be run after the first render.
    // this is an asynchronous operation
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      setBreeds(apiBreeds.map(({ name }) => name));
    });
    // To understand the effects, read this: https://reactjs.org/docs/hooks-effect.html
  }, [setBreed, animal]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
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

        <button
          style={{
            backgroundColor: theme
          }}
        >
          Submit
        </button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
