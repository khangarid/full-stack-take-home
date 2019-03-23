import { actionTypes } from './types'

const initialState = {
  list: [],
  errors: undefined,
  loading: false,
  newEntry: undefined
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case actionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: action.payload.entries,
        total: action.payload.total
      }
    }
    case actionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    case actionTypes.ADD_ENTRY: {
      return {
        ...state,
        newEntry: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export { reducer as entriesReducer }
