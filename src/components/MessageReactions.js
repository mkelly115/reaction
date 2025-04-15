import React from "react";

export default function MessageReactions({ messageReactions }){

   if(!messageReactions) return null

    return(
        messageReactions.map((reaction, index) =>{
            const { id, emoji, username } = reaction;

            return(
                <span key={id}>
                    <em>{username}:</em>
                    {emoji}
                    {index !== messageReactions.length-1 ? ', ' : null}
                </span>
            )
        })
    )


}