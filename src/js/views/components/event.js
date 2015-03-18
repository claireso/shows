import React from 'react';

import EventActions from '../../actions/';
import EventLocalStore from '../../stores/eventLocalStorage.js';

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

  componentWillMount() {
    EventLocalStore.on('save', this.onSave);
    EventLocalStore.on('destroy', this.onDestroy);
  },

  componentWillUnmount() {
    EventLocalStore.removeListener('save', this.onSave);
    EventLocalStore.removeListener('destroy', this.onDestroy);
  },

  componentDidMount() {
    var event = EventLocalStore.get(this.props.data.id);
    if (event) {
      this.setState({'label': 'Retirer des favoris' });
    }
  },

  handleClick() {
    var event = EventLocalStore.get(this.props.data.id);
    EventActions[!event ? 'save' : 'destroy'](this.props.data);

    if('favorites' == this.props.view) {
      //refresh view
      EventActions.loadAllFromLocal();
    }
  },

  onSave(event) {
    if (event.id == this.props.data.id) {
      this.setState({'label': 'Retirer des favoris' });
    }
  },

  onDestroy(event) {
    if (event.id == this.props.data.id) {
      this.setState({'label': 'Ajouter aux favoris' });
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
          <ButtonFavoris key={this.props.data.id} data={this.props.data} view={this.props.view} />
        </div>
      </div>
    );
  }
});

export default Event;
