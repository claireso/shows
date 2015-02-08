var React = require('react');

var api = 'http://ws.audioscrobbler.com/2.0/';
var Event = require('./components/event.js');
var Pagination = require('./components/pagination.js');
var {State} = require('react-router');

var EventList = React.createClass({

  mixins: [State],

  getInitialState() {
    return {data: []};
  },

  componentDidMount() {
    this.loadEvents();
  },

  componentWillReceiveProps() {
    this.loadEvents();
  },

  loadEvents() {
    var self = this,
        xhr = new XMLHttpRequest(),
        page = this.getParams().page || 1;

    xhr.open('GET', api + '?method=geo.getevents&location=paris&page=' + page + '&format=json&api_key=d410ba5107086df95100d7d39248f769', true);

    xhr.onreadystatechange = function(e) {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        self.setState({data: data.events.event, pagination: data.events['@attr']});
      }
    };

    xhr.send();
  },

  render() {

    var eventNodes = this.state.data.map(function(event, index) {
      return (
        <Event key={index} data={event} />
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

module.exports = EventList;
