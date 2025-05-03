import { combineReducers } from 'redux';
import { ThemeSlice } from './theme.slice';

/**COMBINE ALL REDUCERS */
const reducers = combineReducers({
    theme: ThemeSlice.reducer,
});
export default reducers;