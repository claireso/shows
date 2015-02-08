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
      return image.size == 'extralarge';
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
        <div className="event__cover">
          {this.getImage()}
        </div>
        <div className="event__infos">
          <h1 className="event__title">{this.props.data.title}</h1>
          <div className="event__date__venue">
            {this.formatDate()} / {this.props.data.venue.name}
          </div>
          <div className="event__artists">
            Artistes:
              <ul>{artistNodes}</ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Event;
