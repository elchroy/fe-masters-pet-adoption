import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    // this will take in a set of props
    // and give you a new set of state.
    // read up this methos well.
    let photos = ["http://placecorgi.com/600.600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, i) => (
            //jsx-a11y/click-events-have-key-events
            //eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={i}
              src={photo}
              className={i === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
