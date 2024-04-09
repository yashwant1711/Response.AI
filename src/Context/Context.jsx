import { createContext, useState } from "react";
import runChat from "../Config/Response";

export const Context = createContext()

const ContextProvider = ( props ) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loding, setLoding] = useState(false);
    const [resultData, setResultData] = useState("");



    const delayPara = (index,nextWord) => {
        setTimeout(function(){
            setResultData(prev => prev+nextWord)
        }, 75*index);
    }

    const onSent = async (prompt) =>{

        setResultData("")
        setLoding(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompt((prev) => [...prev, input])
       const Response = await runChat(input)
       let responseArray = Response.split("**")
       let newResponse ;
       for(let i = 0; i < responseArray.length; i++){
        if(i === 0 || i%2 !== 1){
            newResponse += responseArray[i];
        }
        else{
            newResponse += "<b>"+responseArray[i]+"</b>"
        }
       }
       let newResponse2 = newResponse.split("*").join("<br/>")
       let newResponseArray = newResponse2.split(" ")
       for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i]
        delayPara(i,nextWord + " ")
       }
       setLoding(false)
       setInput("")
    }

    
    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loding,
        resultData,
        input,
        setInput
    }


    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider