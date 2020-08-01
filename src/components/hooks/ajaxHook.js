import cookie from 'react-cookies';

let API = 'https://ems-access-denied.herokuapp.com';


const useAjax = cb => {
  const token = cookie.load('auth');

  const getUsers = async () => {
    const response = await fetch(`${API}/adminpermanent`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };

  const getTempUsers = async () => {
    const response = await fetch(`${API}/admincheckuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };


  function acceptUser (user) {
    let myUser = { 
      '_id':`${user._id}`,
      'username': `${user.username}`,
      'email': `${user.email}`,
      'password': `${user.password}`,
      'position': `developer`,
      'role': `${user.role}`,
    
    };
    fetch( `${API}/accept`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(myUser),
    }); 

  }
  function rejectUser (user) {
    fetch( `${API}/reject/${user._id}`, {
      method: 'delete',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }); 
  }

  function addUser (user) {
    fetch( `${API}/adduser`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        'username': `${user.username}`,
        'email': `${user.email}`,
        'password': `${user.password}`,
        'birthday': `${user.birthday}`,
        'position' : `${user.position}`,
        'role': `${user.role}`,
      }),
    }); 
  }

  function editUser (user) {
    fetch( `${API}/adminedit/${user._id}`, {
      method: 'patch',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        'email': `${user.email}`,
        'position' : `${user.position}`,
        'role': `${user.role}`,
      }),
    }); 
  }

  const getUserProfile = async () => {
    const response = await fetch(`${API}/getuserprofile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };

  return {getUsers, editUser, addUser, acceptUser, rejectUser, getTempUsers, getUserProfile};
};

export default useAjax;