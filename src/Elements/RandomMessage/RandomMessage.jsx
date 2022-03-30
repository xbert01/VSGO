import React from "react";
import { getRecentScore } from "../../Elements/ScoreLogic/ScoreLogic";


const RandomMessage = () => {
    const messages = [
        {
            id: 1,
            text: "Seriously? I bet your can do better", //0-5
        },
        {
            id: 2,
            text: "Meh, Not great, not terrible", //6-10
        },
        {
            id: 3,
            text: "Decent score. Can you double it now?", //11-15
        },
        {
            id: 4,
            text: "You're doing pretty well, but I bet you can get 25 points next time", //16-20
        },
        {
            id: 5,
            text: "Solid! Try getting 37 and see what happens", //21-30
        },
        {
            id: 6,
            text: "Keep it this way! You're really good at this", //31-40
        },
        {
            id: 7,
            text: "Damn! You're on fire today!", //41-50
        },
        {
            id: 8,
            text: "That was smooth! If you get 70, we have something for you", //51-65
        },
        {
            id: 9,
            text: "What a machine! If you reach a 100, there is something special for you", //66-80
        },
        {
            id: 10,
            text: "Hand down! You're among the gods", //81-100
        },
    ]

    console.log(messages[5]);

    const getMessage = () => {
        if (getRecentScore < 5) {
            return messages[0].text
        } 
        else if (4 < getRecentScore < 10) {
            return messages[1].text
        }
        else if (9 < getRecentScore < 15) {
            return messages[2].text
        }
        else if (14 < getRecentScore < 20) {
            return messages[3].text
        }
        else if (19 < getRecentScore < 30) {
            return messages[4].text
        }
        else if (29 < getRecentScore < 40) {
            return messages[5].text
        }
        else if (39 < getRecentScore < 50) {
            return messages[6].text
        }
        else if (49 < getRecentScore < 65) {
            return messages[7].text
        }
        else if (64 < getRecentScore < 80) {
            return messages[8].text
        }
        else if (getRecentScore > 79) {
            return messages[9].text
        }
    }

    return(
        <div>
            <h2 style={{textAlign: "center"}}>{getMessage()}</h2>
        </div>
        )
}

export default RandomMessage;


