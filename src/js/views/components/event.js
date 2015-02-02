var React = require('react');

var Artist = React.createClass({
    render: function() {
      return (
        <li>
          {this.props.data}
        </li>
      );
    }
});

var Event = React.createClass({

  formatDate: function () {
    return new Date(this.props.data.startDate).toLocaleDateString();
  },

  render: function() {
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
      </div>
    );
  }
});

module.exports = Event;
