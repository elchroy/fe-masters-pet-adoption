import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { DEFAULT_ECDH_CURVE } from "tls";

class Details extends React.Component {
  // here props are readonly

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loading: true
  //   };
  // }

  // After insalling: babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react
  // we can use this instead
  // this is only enabled by the babel-proposal-class-properties plugin
  state = { loading: true };

  componentDidMount() {
    throw new Error("lol");
    // this is very similar to useEffect.
    // It runs on the first start up.
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    const { animal, breed, location, description, name } = this.state;

    return (
      <div className="details">
        <Carousel media={this.state.media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt: {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const DetailsWithErrorBoundary = props => (
  <ErrorBoundary>
    <Details {...props} />
  </ErrorBoundary>
);

export default DetailsWithErrorBoundary;
