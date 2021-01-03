import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../ContextGenerator';

function useRegisteredUser() {
    const [ registered, setRegistered ] = useState(true);
    const { userData } = useContext(ThemeContext);

    useEffect(() => {
        if(!userData) {
            setRegistered(false);
        } else {
            setRegistered(true);
        }
    }, [userData])

    return registered;
}

export default useRegisteredUser;