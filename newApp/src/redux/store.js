import {applyMiddleware, combineReducers} from 'redux';
import createStore from 'redux';
import thunk from 'redux-thunk';
import {authReducer, homeDataReducer} from '../redux/reducers/authReducers';
import {empReducer} from '../redux/reducers/EmpReducer';

const RootReducer = combineReducers({
  auth: authReducer,
  home: homeDataReducer,
  emp: empReducer,
  // Add other reducers as needed
});

export const Store = createStore(RootReducer, applyMiddleware(thunk));

