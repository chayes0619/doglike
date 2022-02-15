import React from "react"
import {useDrop} from 'react-dnd'
import {useState} from "react"
import Picture from "./Picture"




let ChoiceList = [
    {
      id: 1, //chickwing
      url:'https://chayes0619.github.io/doglike/images/chickenwing.svg',
      choiceValue: 'like',
      choicePosition:'choice'
    },
    {
      id: 2,
      url:'https://chayes0619.github.io/doglike/images/carrot.svg',
      choiceValue: 'like',
      choicePosition:'choice'
    },
    {
      id:3,
      url:'https://chayes0619.github.io/doglike/images/orange.svg',
      choiceValue: 'hate',
      choicePosition:'choice'
    },
    {
      id: 4,
      url:'https://chayes0619.github.io/doglike/images/pepper.svg',
      choiceValue: 'hate',
      choicePosition:'choice'
    },
    {
      id: 5,
      url:'https://chayes0619.github.io/doglike/images/underwear.svg',
      choiceValue: 'like',
      choicePosition:'choice'
    }
  ]




    function CashChoices() {

        let [likechoice, setBoard] = useState([]);
        let [hatechoice, setHate] = useState([]);
        let [cash, setCash] = useState("cash-icon")

        const [{ isOver }, likedrop] = useDrop(() => ({
          accept: "image",
          drop: (item) => addImageToBoard(item.id),
          // collect: (monitor) => ({
          //   isOver: !!monitor.isOver(),
          // }),
        }));

        const [{ isOverHate }, hatedrop] = useDrop(() => ({
            accept: "image",
            drop: (item) => addImageToHate(item.id),
            // collect: (monitor) => ({
            //   isOverHate: !!monitor.isOver(),
            // }),
          }));
          const addImageToHate = (id) => {
            
            let obj = ChoiceList.findIndex((obj => obj.id == id));

            
            if(ChoiceList[obj].choicePosition === 'hate' || ChoiceList[obj].choicePosition === 'like'){
              console.log('already set to like')
            }
            else{
              console.log('not set to like yet')
            
            ChoiceList[obj].choicePosition = "hate"

            const choiceList = ChoiceList.filter((picture) => id === picture.id);
            setHate((hatechoice) => [...hatechoice, choiceList[0]]);
          }
          };
        const addImageToBoard = (id) => {
          
          let obj = ChoiceList.findIndex((obj => obj.id == id));

            
          if(ChoiceList[obj].choicePosition === 'like' || ChoiceList[obj].choicePosition === 'hate'){
            console.log('already set to like')
          }
          else{
            console.log('not set to like yet')
          ChoiceList[obj].choicePosition = "like"
          const choiceList = ChoiceList.filter((picture) => id === picture.id);
          setBoard((likechoice) => [...likechoice, choiceList[0]]);
          }
        };

        const resetChoices = () => {
          ChoiceList.forEach(i => {
              i.choicePosition = "choice"
             
          });
          setHate(hatechoice = [])
          setBoard(likechoice = [])
          setCash('cash-icon')
      }

      const submitChoices = () => {

        const answerCheck = ChoiceList.every(x => x.choicePosition === x.choiceValue);
        if(answerCheck){
          setCash('cash-win')
        }
        else{
          setCash('cash-fail')
        }
    }


        return (
            <>
            <div  className='cash-title'>
            <header>What does Cash like?</header>
            </div>
            <img src='https://chayes0619.github.io/doglike/images/background.png' alt="cash" className="background-icon"></img>
            <img  alt="cash" className= {cash}></img>
            <div  className="cash-choices">
        
                    <ul className='choice-list'>
                      {ChoiceList.map((picture) => {
                          if(picture.choicePosition == 'choice'){
                          return <Picture url={picture.url} id={picture.id} />;
                          }else{return}
                      })}
        
                    </ul>
        
            </div>
            <div>
            <h3 className="cash-likes-heading">Likes</h3>
            <div  className="cash-likes" ref={likedrop} >
        
                    <ul className='choice-list'>
                            {likechoice.map((picture) => {
                            
                            return <Picture url={picture.url} id={picture.id} />
                            
                            })}
            
                    </ul>
        
        
            </div>
            </div>
            <div>
            <h3 className="cash-hates-heading">Hates</h3>
            <div className="cash-hates" ref={hatedrop}>
        
                    <ul className='choice-list' >
                    {hatechoice.map((picture) => {
                            return <Picture url={picture.url} id={picture.id} />;
                            })}
                  </ul>
              
        
            </div>
            </div>
            <input className="reset-button" type="button" value="Reset" onClick={resetChoices}/>
            <input className="answer-button" type="button" value="Submit!" onClick={submitChoices}/>
            </>
        )
    }

    export default CashChoices