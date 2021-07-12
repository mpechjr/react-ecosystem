import { createStore, combineReducers, applyMiddleware} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos,isLoading } from './todos/reducers';

const reducers = {
    todos,
    isLoading,
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
    composeWithDevTools(
       applyMiddleware(thunk)
   )
    );