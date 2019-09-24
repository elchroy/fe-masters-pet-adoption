import React from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { navigate, RouteComponentProps } from "@reach/router";
import Modal from "./Modal";
import pet, { Photo } from "@frontendmasters/pet";
import ThemeContext from "./ThemeContext";

class Details extends React.Component<RouteComponentProps<{ id: string }>> {
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
  public state = {
    loading: true,
    showModal: false,
    url: "",
    animal: "",
    breed: "",
    location: "",
    description: "",
    name: "",
    media: [] as Photo[]
  };

  public componentDidMount() {
    if (!this.props.id) {
      navigate("/");
      return;
    }
    // this is very similar to useEffect.
    // It runs on the first start up.
    pet
      .animal(+this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        });
      })
      .catch((error: Error) => {
        this.setState({ error });
      });
  }

  public toggleModal = () =>
    this.setState({ showModal: !this.state.showModal });

  // this could have also been done with the redirect as well
  public adopt = () => navigate(this.state.url);

  public render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      showModal,
      media
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {themeHook => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: themeHook[0] }}
              >
                Adopt: {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No, I am a monster</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithErrorBoundary = (
  props: RouteComponentProps<{ id: string }>
) => (
  <ErrorBoundary>
    <Details {...props} />
  </ErrorBoundary>
);

export default DetailsWithErrorBoundary;
