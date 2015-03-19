import {Dispatcher} from 'flux';


class AppDispatcher extends Dispatcher {

  handleViewAction(action) {
    super.dispatch(action);
  }

}

export default new AppDispatcher();
