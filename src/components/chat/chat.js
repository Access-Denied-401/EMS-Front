/* eslint-disable no-unused-vars */
import React, {useState, useEffect}  from 'react';
import {Link} from 'react-router-dom';
import io from 'socket.io-client';


function Chat(props) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'https://ems-access-denied.herokuapp.com';
  useEffect(()=>{
    const socket = io(ENDPOINT);
    console.log(socket);
  },[]);

  return(
    <h1>Chat</h1>
  );
}

export default Chat;