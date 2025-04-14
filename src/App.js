import React, { useReducer, useEffect } from "react";
import { initialState , reducer } from "./state/reducer";
import Context from './context'
import { NEW_MESSAGE } from "./state/types";
import { newMessage } from "./state/actions";
import PublishMessage from "./components/PublishMessage";
import MessageBoard from "./components/MessageBoard";
import  PubSub  from './pubsub'



const pubsub = new PubSub();

function App() {

const [state, dispatch] = useReducer(reducer, initialState)

useEffect(() => {
  pubsub.addListener({
    message: messageObject => {
      const { channel, message } = messageObject
  
      console.log('recieved message', message, 'channel', channel)
  
      dispatch(message)
    }
  })
}, [])

console.log('state', state)

  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
     <h2>Reaction</h2>
     <hr />
     <PublishMessage/>
     <hr />
     <MessageBoard/>
    </Context.Provider>
  );
}

export default App;
