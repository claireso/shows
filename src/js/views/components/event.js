var React = require('react');

var Artist = React.createClass({
    render() {
      return (
        <li>
          {this.props.data}
        </li>
      );
    }
});

var Cover = React.createClass({
    render() {
        return(
            <img src={this.props.data['#text']} />
        )
    }
});

var Event = React.createClass({

  formatDate() {
    return new Date(this.props.data.startDate).toLocaleDateString();
  },

  getImage() {
    var img = this.props.data.image.filter(function(image) {
      return image.size == 'large';
    });

    return <Cover data={img[0]} />;
  },

  render() {
    var artistNodes;

    if (Array.isArray(this.props.data.artists.artist)) {
      artistNodes = this.props.data.artists.artist.map(function(artist, index) {
        return (
          <Artist key={index} data={artist} />
        );
      });
    } else {
      artistNodes = <Artist data={this.props.data.artists.artist} />
    }


    return (
      <div className="event">
        Title: {this.props.data.title} <br />
        Venue: {this.props.data.venue.name} <br />
        Date: {this.formatDate()} <br />
        Artists: <ul>{artistNodes}</ul>
        Image: {this.getImage()}
      </div>
    );
  }
});

module.exports = Event;
