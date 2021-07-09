import { createStore, combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { todos } from './todos/reducers';

const reducers = {
    todos,
};

const persistConfig = {
    key: 'root',
    storage, //local web storage
    stateReconciler: autoMergeLevel2, //tell redux how to reconcile inital and stored states of app
}
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()  //connect to redux extension in browser
    );