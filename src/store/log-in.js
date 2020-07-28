

let initialState = {
  isLoggedIn: false,
  token: '',
  currentUser:{},
};

export default function logInReducer(state= initialState, action){
  switch(action.type){
  case 'SET_LOGIN':
    return {...state};

  default:
    return state;
  }
}


