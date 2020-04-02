import { SET_USER, LOGOUT_USER, AUTH_FAILED, CLEAR_ERROR } from '../actions/types'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = { 
  isLoggedIn: false,
  user:{
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isActive: '',
  }
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_USER: return action.payload; 
    case AUTH_FAILED: return {...initialState, error: action.payload};
    case LOGOUT_USER: return initialState; 
    case CLEAR_ERROR: delete state.error; return {...state}
    default: return state; 
  }
}

export const selectUserInfo = (user) => {
  return user;
}

const persistConfig = { 
  key: 'auth',
  storage,
  blacklist: ['error'],
};

export default persistReducer(persistConfig, authReducer);