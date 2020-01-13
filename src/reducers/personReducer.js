const initialState = {
  person: {},
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PERSON':
      return {
        ...state,
      }
    case 'FETCH_PERSON_SUCCESS':
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    case 'FETCH_PERSON_ERROR':
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    default:
      return state
  }
}