import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';
import { thunk } from 'redux-thunk';

const loggerMiddleware = (store) => (next) => (action) => {
  if(!action.type) {
    return next(action);
  }

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentState', store.getState());
  next(action);

  console.log('next state:', store.getState())
}
const middleWares = [loggerMiddleware,thunk].filter(
  Boolean
);
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store)