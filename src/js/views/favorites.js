import React from 'react';
import Event from './components/event.js';

import EventActions from '../actions/';
import EventLocalStore from '../stores/eventLocalStorage.js';

var Favoris = React.createClass({
  getInitialState() {
    return {data: []};
  },

  componentDidMount() {
    EventActions.loadAllFromLocal();
  },

  componentWillMount() {
    EventLocalStore.on('loaded', this.onLoaded);
  },

  componentWillUnmount() {
    EventLocalStore.removeListener('loaded', this.onLoaded);
  },

  onLoaded() {
    var events = EventLocalStore.getAll();
    this.setState({'data': events});
  },

  render() {
    var eventNodes = this.state.data.map((event, index) => {
      return (
          <Event key={index} data={event} view="favorites" />
      );
    });

    if(!eventNodes.length) {
      eventNodes = 'Vous n‘avez pas encore ajouté de favoris';
    }

    return (
      <div className="row event-list">
        {eventNodes}
      </div>
    );
  }
});

export default Favoris;
