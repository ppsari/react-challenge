const initialState = {
  quote : 'Bila hidup sekedar hidup babi juga hidup'
}

const quoteR = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_QUOTE' : return {...state, quote: action.result}
    default: return state
  }
}

export default quoteR;