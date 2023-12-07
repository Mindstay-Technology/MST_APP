import axios from 'axios';

export const POST_EMP_DATA_REQUEST = 'POST_EMP_DATA_REQUEST';
export const POST_EMP_DATA_SUCCESS = 'POST_EMP_DATA_SUCCESS';
export const POST_EMP_DATA_FAILURE = 'POST_EMP_DATA_FAILURE';

const apiEndpoint = 'YOUR_API_ENDPOINT';

export const postEmpData = (name, email, designation) => async (dispatch) => {
  dispatch({ type: POST_EMP_DATA_REQUEST });

  try {
    const response = await axios.post(apiEndpoint, { name, email, designation });
    dispatch({
      type: POST_EMP_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: POST_EMP_DATA_FAILURE,
      payload: error.message,
    });
  }
};