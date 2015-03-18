import AppDispatcher from '../dispatcher/';
import EventConstants from '../constants/';

var EventActions = {

  loadAll(param) {
    AppDispatcher.handleViewAction({
      action: EventConstants.EVENT_LOAD,
      param: param
    })
  },

  loadAllFromLocal() {
    AppDispatcher.handleViewAction({
      action: EventConstants.EVENT_LOAD_FROM_LOCAL
    })
  },

  save(param) {
    AppDispatcher.handleViewAction({
      action: EventConstants.EVENT_SAVE,
      param: param
    })
  },

  destroy(param) {
    AppDispatcher.handleViewAction({
      action: EventConstants.EVENT_DESTROY,
      param: param
    })
  }

};

export default EventActions;
