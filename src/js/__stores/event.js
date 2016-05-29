import AppDispatcher from '../dispatcher/';
import {EventEmitter} from 'events';
import EventConstants from '../constants/';

var api = 'http://ws.audioscrobbler.com/2.0/';


class EventStore extends EventEmitter {

  constructor() {
    super();

    this.data = {};

    this.dispatcherIndex = AppDispatcher.register((payload) => {
      var {action, param} = payload;

      switch(action) {
        case EventConstants.EVENT_LOAD:
          this.loadAll(param);
          break;
      }

      return true;
    })
  }

  loadAll(param) {
    var self = this,
        xhr = new XMLHttpRequest(),
        page = param.page;

    xhr.open('GET', api + '?method=geo.gettopartists&country=france&page=' + page + '&format=json&api_key=d410ba5107086df95100d7d39248f769', true);

    xhr.onreadystatechange = function(e) {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        self.data = data;
        self.emit('loaded');
      }
    };

    xhr.send();
  }

  getAll() {
    return this.data;
  }

};

export default new EventStore();
