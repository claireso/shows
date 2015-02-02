var React = require('react');

var api = 'http://ws.audioscrobbler.com/2.0/';
var Event = require('./components/event.js')

var EventList = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    var self = this,
        xhr = new XMLHttpRequest();

    xhr.open('GET', api + '?method=geo.getevents&location=paris&format=json&api_key=d410ba5107086df95100d7d39248f769', true);

    xhr.onreadystatechange = function(e) {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText); ;
        self.setState({data: data.events.event});
      }
    };

    xhr.send();

  },
  render: function() {

    var eventNodes = this.state.data.map(function(event, index) {
      return (
        <Event key={index} data={event} />
      );
    });

    return (
      <div className="eventList">
        {eventNodes}
      </div>
    );
  }
});

module.exports = EventList;
