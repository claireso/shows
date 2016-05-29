import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
            <div>List</div>
        )
    }
}

export default List;



/*import {State} from 'react-router';

import Event from './components/event.js';
import Pagination from './components/pagination.js';

import EventActions from '../actions/';
import EventStore from '../stores/event.js';

var EventList = React.createClass({

  mixins: [State],

  getInitialState() {
    return {data: []};
  },

  componentWillMount() {
    EventStore.on('loaded', this.onLoaded);
  },

  componentWillUnmount() {
    EventStore.removeListener('loaded', this.onLoaded);
  },

  componentDidMount() {
    this.loadAll();
  },

  componentWillReceiveProps() {
    this.loadAll();
  },

  loadAll() {
    EventActions.loadAll({
      page: this.getParams().page || 1
    });
    EventActions.loadAllFromLocal();
  },

  onLoaded() {
    var events = EventStore.getAll();

    if (this.isMounted()) {
      this.setState({data: events.events.event, pagination: events.events['@attr']});
    }

  },

  render() {

    var eventNodes = this.state.data.map((event, index) => {
      return (
        <Event key={index} data={event} view="list" />
      );
    });

    var pagination;

    if (this.state.pagination) {
      pagination = <Pagination data={this.state.pagination} />;
    }

    return (
      <div className="row event-list">
        {eventNodes}
        {pagination}
      </div>
    );
  }
});

export default EventList;*/
