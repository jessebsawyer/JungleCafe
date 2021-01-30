import {
  CONTACT_FORM_REQUEST,
  CONTACT_FORM_SUCCESS,
  CONTACT_FORM_FAIL,
} from '../constants/contactConstants';
import axios from 'axios';

export const contact = (name, email, phone, message) => async (dispatch) => {
  try {
    dispatch({
      type: CONTACT_FORM_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/contact/send',
      { name, email, phone, message },
      config
    );

    dispatch({
      type: CONTACT_FORM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_FORM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
