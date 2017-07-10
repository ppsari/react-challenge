import store from './index';
import trumpR from '../reducers/trumpR'
import enemyR from '../reducers/enemyR'
import quoteR from '../reducers/quoteR'

describe('Store testing', () => {
  it('should get initial enemy state', () => {
    const state = { currEnemy: '', enemies: []}
    const initialState = store.getState().enemy
    expect(initialState).toEqual(state)
  })

  it('should get initial quote state', () => {
    const state = { quote: 'Bila hidup sekedar hidup babi juga hidup'}
    const initialState = store.getState().quote
    expect(initialState).toEqual(state)
  })

  it('should get initial trump state', () => {
    const state = { opinion: '', face:''}
    const initialState = store.getState().trump
    expect(initialState).toEqual(state)
  })

  it('should get trump', () => {
    const initialState = { opinion: '', face:''}
    let username = 'poppy';
    const result = {
      opinion : `Tes opinion ${username}`,
      face: `https://api.adorable.io/avatars/285/${username}.png`
    }
    const action = {
      type: 'GET_OPINION',
      result: result
    }
    let state = {...initialState, ...result}
    const actualState = trumpR(initialState, action)
    expect(actualState).toEqual(state)
  })
  it('should get quote', () => {
    const initialState = {
      quote : 'Bila hidup sekedar hidup babi juga hidup'
    }
    const result = 'tes'
    const res2 = {'quote': result}
    const action = {
      type: 'GET_QUOTE',
      result: result
    }
    let state = {...initialState,  ...res2}
    const actualState = quoteR(initialState, action)
    expect(actualState).toEqual(state)
  })
  it('should get enemy', () => {
    const initialState = {
      currEnemy : '',
      enemies: []
    }
    const result = {
      currEnemy: {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "Tatooine",
        "films": [
            "http://swapi.co/api/films/2/",
            "http://swapi.co/api/films/6/",
            "http://swapi.co/api/films/3/",
            "http://swapi.co/api/films/1/",
            "http://swapi.co/api/films/7/"
        ],
        "species": 'Human',
        "vehicles": [
            "http://swapi.co/api/vehicles/14/",
            "http://swapi.co/api/vehicles/30/"
        ],
        "starships": [
            "http://swapi.co/api/starships/12/",
            "http://swapi.co/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "http://swapi.co/api/people/1/"
      },
      enemies: []
    }
    const action = {
      type: 'GET_ENEMY',
      result: result
    }
    let state = {...initialState, ...result}
    const actualState = enemyR(initialState, action)
    expect(actualState).toEqual(state)
  })

  it('should get enemies', () => {
    const initialState = {
      currEnemy : '',
      enemies: []
    }
    const result = {
      currEnemy: '',
      enemies: [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "http://swapi.co/api/planets/1/",
            "films": [
                "http://swapi.co/api/films/2/",
                "http://swapi.co/api/films/6/",
                "http://swapi.co/api/films/3/",
                "http://swapi.co/api/films/1/",
                "http://swapi.co/api/films/7/"
            ],
            "species": [
                "http://swapi.co/api/species/1/"
            ],
            "vehicles": [
                "http://swapi.co/api/vehicles/14/",
                "http://swapi.co/api/vehicles/30/"
            ],
            "starships": [
                "http://swapi.co/api/starships/12/",
                "http://swapi.co/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "http://swapi.co/api/people/1/"
        },
        {
            "name": "C-3PO",
            "height": "167",
            "mass": "75",
            "hair_color": "n/a",
            "skin_color": "gold",
            "eye_color": "yellow",
            "birth_year": "112BBY",
            "gender": "n/a",
            "homeworld": "http://swapi.co/api/planets/1/",
            "films": [
                "http://swapi.co/api/films/2/",
                "http://swapi.co/api/films/5/",
                "http://swapi.co/api/films/4/",
                "http://swapi.co/api/films/6/",
                "http://swapi.co/api/films/3/",
                "http://swapi.co/api/films/1/"
            ],
            "species": [
                "http://swapi.co/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:10:51.357000Z",
            "edited": "2014-12-20T21:17:50.309000Z",
            "url": "http://swapi.co/api/people/2/"
        }
      ]
    }
    const action = {
      type: 'GET_ENEMIES',
      result: result
    }
    let state = {...initialState, ...result}
    const actualState = enemyR(initialState, action)
    expect(actualState).toEqual(state)
  })

})