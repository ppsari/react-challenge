/* actions > index.js */
import axios from 'axios';

const getOpinion = username => dispatch => {
  axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${username}`)
  .then(response => {
    dispatch({
      type: 'GET_OPINION',
      result : {
        opinion : response.data.message,
        face: `https://api.adorable.io/avatars/285/${username}.png`
      }
    })
  })
  .catch(err => { console.log(err); })
}

const getEnemies = () => dispatch => {
  axios.get(`http://swapi.co/api/people/`)
  .then(response => {
    dispatch({
      type: 'GET_ENEMIES',
      result: {enemies: response.data.results}
    });
  })
  .catch(err => {
    console.log(err);
  })
}
const getEnemy = (id) => dispatch => {
  let _self = this;
  console.log('dipanggil action '+id);
  axios.get(`http://swapi.co/api/people/${id}`)
  .then(response => {
    console.log('tes response enemy'+response.data)
    let enemyDt = response.data;
    if (response.data.hasOwnProperty('detail')) {
      console.log('error'+response.data.detail);
    }
    else {
      console.log(`${response.data.homeworld}`);
      axios.get(`${response.data.homeworld}`)
      .then(home => {
        enemyDt.homeworld = home.data.name;
        axios.get(`${response.data.species}`)
        .then(species=> {
          enemyDt.species = species.data.name;
          enemyDt.finishLoad = true
          dispatch({
            type: 'GET_ENEMY',
            result: {currEnemy: enemyDt}
            // currEnemy: enemyDt
          })
        })
      })
      .catch(err => {
        console.log(err)
        dispatch({type:'REDIRECT'})
      })
    }

  })
  .catch(err => {
    console.log(err);
    this.setState({redirect:true})
  })
}
const getQuote = () => dispatch => {
  axios.get(`http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=`)
  .then(response => {
    dispatch({
      type: 'GET_QUOTE',
      result: response.data[0].content.replace(/<\/?[^>]+(>|$)/g, "")
    });
  })
  .catch(err => {
    console.log(err);
    dispatch({type:'REDIRECT'})
  })
}

export {
  getOpinion,
  getEnemies,
  getEnemy,
  getQuote
}

/* actions > index.js */