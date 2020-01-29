import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// Note: keep all page reducer here.
import homeReducer from '../Pages/Home/store/reducer';

const history = createBrowserHistory();

const combineAppReducers = combineReducers({
    router: connectRouter(history),
    homeReducer,
});

export default combineAppReducers;