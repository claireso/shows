import AppDispatcher from '../dispatcher/';
import {EventEmitter} from 'events';
import EventConstants from '../constants/';


class EventLocalStore extends EventEmitter {

  constructor() {

    this.data = [];

    this.dispatcherIndex = AppDispatcher.register(function(payload) {
      var action = payload.action,
          param = payload.param;

      switch(action) {
        case EventConstants.EVENT_LOAD_FROM_LOCAL:
          this.loadAll(param);
          break;

        case EventConstants.EVENT_SAVE:
          this.save(param);
          break;

        case EventConstants.EVENT_DESTROY:
          this.destroy(param);
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

  save(event) {
    var events = this.getAll();

    events.push( event );
    localStorage.setItem('shows', JSON.stringify(events));
    this.emit('save', event);
  }

  destroy(event) {
    var events, pos;

    events = this.getAll();
    pos = events.map(function(event) { return event.id; }).indexOf(event.id);
    events.splice(pos, 1);
    localStorage.setItem('shows', JSON.stringify(events));
    this.emit('destroy', event);
  }

};

export default new EventLocalStore();
