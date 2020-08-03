import cookie from 'react-cookies';

let API = 'https://ems-access-denied.herokuapp.com';


const useAjax = () => {
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
    try {
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
    } catch (error) {
      console.log(error);
    }
   
  };


  const acceptUser = async (user) =>{
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

  };

  const rejectUser = async (user) => {
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
  };

  const addUser = async (user) => {
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
  };

  const userEditHisProfile = (users) => {
    console.log(users);
    fetch( `${API}/usereditprofile`, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        '_id':`${users._id}`,
        'username':`${users.username}`,
        'password':`${users.password}`,
        'email': `${users.email}`,
        'image': `${users.image}`,
        'gender': `${users.gender}`,
        'birthday': `${users.birthday}`,        
        'bio': `${users.bio}`,
      }),
    }); 
  };

  const editUser = async (user) => {
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
  };

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

  const userSignUp = async (user) => {
    try {
      await fetch( `${API}/signup`, {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          'username': `${user.username}`,
          'email': `${user.email}`,
          'password': `${user.password}`,
          'image': `${user.image}`,
          'role': 'user',
        }),
      });    
    } catch (error) {
      console.log(error);
    }
  };

  return {getUsers, editUser, addUser, acceptUser, rejectUser, getTempUsers, getUserProfile, userSignUp, userEditHisProfile};
};

export default useAjax;