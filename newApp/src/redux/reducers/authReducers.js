  import {SET_PHONE_NUMBER, 
    SET_OTP, SET_AUTHENTICATED,
    FETCH_HOME_DATA_REQUEST,
    FETCH_HOME_DATA_SUCCESS,
    FETCH_HOME_DATA_FAILURE,
  } from '../actionTypes'

 const initialState = {
    phone: '',
    otp: '',
    isAuthenticated: false,
    homeData: [],
    isLoading: false,
    error: null,
    page: 1,

  };
  
//----------for login and otp--------------------
 export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PHONE_NUMBER:
        return { ...state, phone: action.payload };
      case SET_OTP:
        return { ...state, otp: action.payload };
        case SET_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
      default:
        return state;
    }
  };
  
//---------home reducers-------------
export const homeDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_HOME_DATA_SUCCESS:
      return {
        ...state,
        data: [...state.homeData, ...action.payload],
        isLoading: false,
        error: null,
        page: state.page + 1,
      };
    case FETCH_HOME_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

