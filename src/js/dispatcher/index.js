import {Dispatcher} from 'flux';


class AppDispatcher extends Dispatcher {

  handleViewAction(action) {
    this.dispatch(action);
  }

}

export default new AppDispatcher();
