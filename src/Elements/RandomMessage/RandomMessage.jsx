import React from "react";


const RandomMessage = () => {
    const messages = [
        {
            id: "0",
            text: "That was close! Maybe next time",
        },
         {
            id: "1",
            text: "What a game!",
        },
          {
            id: "2",
            text: "Not bad, maybe one more try?",
        },
           {
            id: "3",
            text: "Wow! Have you tried it before?",
        },
    ]

        const mess = messages[Math.floor(Math.random() * messages.length)]

    return(
        <div>
            <h2 style={{textAlign: "center"}}>{mess.text}</h2>
        </div>
        )
}

export default RandomMessage;


