import React, {useState, useEffect} from 'react';
import { FormControl, Input, IconButton} from '@material-ui/core';
import Message from "./components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect( () => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect( () => {
    setUsername(prompt('What is your name?'))
  }, [])

  const sendMessage = event => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  }
  return (
    <div className="App">
    <h1> Welcome {username} </h1>
      <form className="app__form">

        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Type a message..." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} type="submit" onClick={sendMessage} variant="contained" color="primary">
            <SendIcon />
          </IconButton>
        </FormControl>


      </form>

      <FlipMove>
        {messages.map( ({id, message}) => (
          <Message key={id} username={username} message={message}/>
        ))}
      </FlipMove>

    </div>
  );
}

export default App;
