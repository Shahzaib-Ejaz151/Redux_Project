import { createStore, compose, applyMiddleware }from 'redux';
import thunk from 'redux-thunk';
/// root reducer
import rootReducer from './reducer/root_reducer';
/// initial state
const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store;