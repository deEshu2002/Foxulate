import React, { createContext, ReactNode, useContext, useState} from "react";

const FocusContext = createContext<boolean | null>(null);


interface Props{
    children?:ReactNode
}

export function useFocus() {
    return useContext(FocusContext);
}

export function ThemeProvider( {children}:Props ){
    const [focusScenario, setFocusScenario] = useState<boolean>(true);

    function toggleFocusScenario(){
        setFocusScenario(focusScenario => !focusScenario);
    }

    return(
        <FocusContext.Provider value={focusScenario}>
            {children}
        </FocusContext.Provider>
    )
}