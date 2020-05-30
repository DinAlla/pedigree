import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import applicationReducer from './reducers/reducers';

export default createStore(applicationReducer, composeWithDevTools(applyMiddleware(thunk)));