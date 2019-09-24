import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import { connect } from "react-redux";
import { changeLocation, changeTheme } from "./actionCreators";

const SearchParams = props => {
  // Something to note: React hooks should never go into if statements, for or while loops
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  // const [theme, setTheme] = useContext(ThemeContext);

  const requestPets = async () => {
    const { animals } = await pet.animals({
      location: props.location,
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
            value={props.location}
            placeholder="location"
            onChange={event => props.setLocation(event.target.value)}
            onBlur={event => props.setLocation(event.target.value)}
          />
        </label>

        <AnimalDropDown />
        <BreedDropDown />

        <label htmlFor="theme">
          Theme:
          <select
            value={props.theme}
            onChange={e => props.setTheme(e.target.value)}
            onBlur={e => props.setTheme(e.target.value)}
          >
            <option value="black">Black</option>
            <option value="peru">Peru</option>
            <option value="darkBlue">Dark Blue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="green">Green</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>

        <button
          style={{
            backgroundColor: props.theme
          }}
        >
          Submit
        </button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

const mapStateToProps = ({ theme, location }) => ({
  theme,
  location
});

const mapDispatchToProps = dispatch => ({
  setTheme: theme => dispatch(changeTheme(theme)),
  setLocation: location => dispatch(changeLocation(location))
});

const ConnectedSearchParams = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchParams);

export default ConnectedSearchParams;
