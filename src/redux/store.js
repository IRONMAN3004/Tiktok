import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEhancers = composeWithDevTools();
const store = createStore(rootReducer, composedEhancers);

export default store;
