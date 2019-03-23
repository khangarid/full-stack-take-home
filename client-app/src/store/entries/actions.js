import { actionTypes } from './types'
import api from '../../utils/api'

export const addEntry = entry => async dispatch => {
  const response = await api.addEntry(entry)

  if (response && response.timestamp) {
    dispatch({ type: actionTypes.ADD_ENTRY, payload: response })
    return true;
  }

  return false;
}

export const fetchEntries = query => async dispatch => {
  dispatch({ type: actionTypes.FETCH_REQUEST })

  // TODO: Handle error
  const response = await api.fetchEntries(query);

  dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response });
}
