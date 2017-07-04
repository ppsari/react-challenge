const initialState = {
  currEnemy : '',
  enemies: []
}

const enemyR = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ENEMIES' :
      return {...state,
        enemies: action.result.enemies
      }
    case 'GET_ENEMY':
      return {...state,
        currEnemy: action.result.currEnemy
      }
    default: return state
  }
}

export default enemyR;