import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    // libraries: () => []
    libraries: LibraryReducer
}); 