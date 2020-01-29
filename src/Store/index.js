import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const middlewares = [routerMiddleware(history), sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(reducers),
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(sagas);

export { store, history };