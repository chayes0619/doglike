import React from "react"

function ResetButton(cashList) {
    

    const resetChoices = (cashList) => {
        cashList.array.forEach(i => {
            i.choicePosition = "choice"
            console.log(i)
        });
    }
    return(
        <input className="reset-button" type="button" value="Reset" onClick={resetChoices}/>
    )
}

export default ResetButton;