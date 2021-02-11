import { useState, createContext } from 'react';
export const ThemeContext = createContext();

function ContextGenerator({ children }) {
    const [userData, setUserData] = useState(null);
    const [owner, setOwner] = useState(null);
    const [group, setGroup] = useState(null);

    return (
        <ThemeContext.Provider
            value={{ userData, setUserData, owner, setOwner, group, setGroup }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ContextGenerator;