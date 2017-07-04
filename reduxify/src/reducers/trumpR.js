const initialState = {
  opinion : '',
  face: ''
}

const trumpR = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPINION' :
      return {...state,
        opinion: action.result.opinion,
        face: action.result.face
      }
    default: return state
  }
}

export default trumpR;