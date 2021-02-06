import { useState, createContext } from 'react';
export const ThemeContext = createContext();

function ContextGenerator({children}) {
    const [ userData, setUserData ] = useState(null);
    const [ owner, setOwner ] = useState(null);

    return(
        <ThemeContext.Provider value={{userData, setUserData, owner, setOwner}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ContextGenerator;