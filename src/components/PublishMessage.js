import React, { useState } from "react";
import { newMessage } from "../state/actions";

export default function PublishMessage(props){

const { dispatch } = props;

const [text, setText] = useState('');

const updateText = event => {
    setText(event.target.value)
}

const publishMessage = () => {
    dispatch(newMessage(text))
}
    return(
        <div>
            <h3>Got something to say?</h3>
            <input value={text} onChange={updateText}/>
            {''}
            <button onClick={publishMessage}>Publish it!</button>
        </div>
    )
}