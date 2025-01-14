import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();

function ContextProvider({children}){
    const [result,setResult] = useState("");
    return(
        <Context.Provider value={[result,setResult]}>{children}</Context.Provider>
    )
}
const useResult=()=>useContext(Context);
export {useResult,ContextProvider};