import React, { useReducer, useEffect } from "react";
import { initialState , reducer } from "./state/reducer";
import Context from './context'
import { NEW_MESSAGE } from "./state/types";
import { newMessage } from "./state/actions";
import PublishMessage from "./components/PublishMessage";
import MessageBoard from "./components/MessageBoard";
import './pubsub'


function App() {

const [state, dispatch] = useReducer(reducer, initialState)

console.log('state', state)

  return (
    <Context.Provider value={{ state, dispatch}}>
     <h2>Reaction</h2>
     <hr />
     <PublishMessage/>
     <hr />
     <MessageBoard/>
    </Context.Provider>
  );
}

export default App;
