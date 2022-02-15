import React from "react"

function AnswerButton(cashList) {
    

    // const resetChoices = (cashList) => {
    //     cashList.array.forEach(i => {
    //         i.choicePosition = "choice"
    //         console.log(i)
    //     });
    // }
    return(
        <input className="answer-button" type="button" value="Submit!" onClick={resetChoices}/>
    )
}

export default AnswerButton;