import AppDispatcher from '../dispatcher/';
import {EventEmitter} from 'events';
import EventConstants from '../constants/';


class EventLocalStore extends EventEmitter {

  constructor() {

    this.data = [];

    this.dispatcherIndex = AppDispatcher.register(function(payload) {
      var action = payload.action,
          param = payload.param,
          callback = payload.callback;

      switch(action) {
        case EventConstants.EVENT_LOAD_FROM_LOCAL:
          this.loadAll(param);
          break;

        case EventConstants.EVENT_SAVE:
          this.save(param, callback);
          break;

        case EventConstants.EVENT_DESTROY:
          this.destroy(param, callback);
          break;

      }

      return true;
    }.bind(this))
  }

  loadAll(param) {
    var shows = localStorage.getItem('shows');

    if (shows) {
      this.data = JSON.parse(shows);
      this.emit('loaded');
    }

  }

  updateAll(events) {
    localStorage.setItem('shows', JSON.stringify(events));
    this.data = events;
  }

  getAll() {
    return this.data;
  }

  get(id) {
    var events = this.getAll();

    var event = events.filter(function(s){
      return s.id == id;
    }.bind(this));

    return event[0];
  }

  save(event, callback) {
    var events = this.getAll(),
        insertAt = events.length,
        timestamp;

    timestamp = +new Date(event.startDate);

    events.some(function(localEvent, index){
      if (timestamp < +new Date(localEvent.startDate)) {
        insertAt = index;
        return true;
      }
    });

    events.splice(insertAt, 0, event );
    this.updateAll(events);
    callback(event);
  }

  destroy(event, callback) {
    var events, pos;

    events = this.getAll();
    pos = events.map(function(event) { return event.id; }).indexOf(event.id);
    events.splice(pos, 1);
    this.updateAll(events);
    callback(event);
  }

};

export default new EventLocalStore();
