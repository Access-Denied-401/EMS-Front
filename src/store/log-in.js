// import loginUser from './actions';

let initialState = {
  loggedIn: false,
  token: '',
  user:{},
};

export default (state= initialState, action) => {
  let {type, payload} = action;
  console.log('im in the reducer', action);
  switch(type){
  case 'SET_LOGIN':
    // console.log('Im in the reducer at the moment ');
    return {...state, 'loggedIn':payload.loggedIn, 'token':payload.token, 'user':payload.user};

  case 'LOGOUT_USER':
    return {...state, 'loggedIn':false , 'toekn': null, 'user': {}};

  default:
    return state;
  }
};


