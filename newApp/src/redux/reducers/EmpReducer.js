
import {
  POST_EMP_DATA_REQUEST,
  POST_EMP_DATA_SUCCESS,
  POST_EMP_DATA_FAILURE,
} from '../actions/EmpActions';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_EMP_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case POST_EMP_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case POST_EMP_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

