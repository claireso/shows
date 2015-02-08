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

var ButtonFavoris = React.createClass({

  getInitialState() {
    return {label: 'Ajouter aux favoris'};
  },

  getShows() {
    var shows = localStorage.getItem('shows');

    if (shows) {
      shows = JSON.parse(shows);
    }

    return shows || [];
  },

  setShows(shows) {
    localStorage.setItem('shows', JSON.stringify(shows));
  },

  isInLocalStorage() {
    var shows = this.getShows();

    var show = shows.filter(function(s){
      return s.id == this.props.data.id;
    }.bind(this));

    return show.length;
  },

  setInLocalStorage() {
    var shows = this.getShows();

    shows.push( this.props.data );
    this.setShows(shows);
    this.setState({'label': 'Retirer des favoris' });
  },

  removeFromLocalStorage() {
    var shows, pos;

    shows = this.getShows();
    pos = shows.map(function(show) { return show.id; }).indexOf(this.props.data.id);

    shows.splice(pos, 1);
    this.setShows(shows);
    this.setState({'label': 'Ajouter aux favoris' });
  },

  componentDidMount() {
    if (this.isInLocalStorage()) {
      this.setState({'label': 'Retirer des favoris' });
    }
  },

  handleClick() {
    this[ !this.isInLocalStorage() ? 'setInLocalStorage' : 'removeFromLocalStorage' ]();

    if(this.props.afterClick) {
      this.props.afterClick();
    }
  },

  render() {
    return(
      <button className="event__fav" onClick={this.handleClick}>{this.state.label}</button>
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
          <ButtonFavoris key={this.props.data.id} data={this.props.data} afterClick={this.props.afterClick} />
        </div>
      </div>
    );
  }
});

module.exports = Event;
