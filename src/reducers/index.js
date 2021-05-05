import { combineReducers } from 'redux';
import formVisibleReducer from "./form-visible-reducer";
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  firestore: firestoreReducer,

});

export default rootReducer;

