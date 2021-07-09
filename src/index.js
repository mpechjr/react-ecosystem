import React from 'react';
import ReactDom from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store.js';
import App from './App.js'

const store = configureStore();
const persistor = persistStore(store);

ReactDom.render(
   <Provider store={store}>
      <PersistGate 
      loading={<div>Loading ...</div>} //view to display while loading data
      persistor={persistor}>
    <App/>
    </PersistGate>
   </Provider>
, document.getElementById('root'));