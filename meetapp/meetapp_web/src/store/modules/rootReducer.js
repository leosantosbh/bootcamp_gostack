import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import meet from './meet/reducer';

export default combineReducers({ auth, user, meet });
