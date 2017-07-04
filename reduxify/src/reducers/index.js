/* reducers > index.js */
import {combineReducers} from 'redux';
import enemyR from './enemyR';
import quoteR from './quoteR';
import trumpR from './trumpR';

export default combineReducers({
  enemy : enemyR,
  quote: quoteR,
  trump: trumpR
})

/* reducers > index.js */