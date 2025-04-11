import React, { useReducer, useEffect } from "react";
import { initialState , reducer } from "./state/reducer";
import { NEW_MESSAGE } from "./state/types";
import { newMessage } from "./state/actions";
import PublishMessage from "./components/PublishMessage";
import MessageBoard from "./components/MessageBoard";


function App() {

const [state, dispatch] = useReducer(reducer, initialState)

console.log('state', state)

  return (
    <div >
     <h2>Reaction</h2>
     <hr />
     <PublishMessage dispatch={dispatch}/>
     <hr />
     <MessageBoard messages={state.messages}/>
    </div>
  );
}

export default App;
