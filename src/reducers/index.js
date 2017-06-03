import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    // libraries: () => []
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer 
}); 