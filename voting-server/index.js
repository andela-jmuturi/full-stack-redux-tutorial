import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer(store);

// Load some initial entries.
store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});

store.dispatch({
  type: 'NEXT'
});
