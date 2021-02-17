import AuthService from "../services/auth.service";
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function useLoggedUser() {
    const [userLoggeed, setUserLogged] = useState(false);
    const history = useHistory();

    useEffect(() => {
        AuthService.isLogged()
            .then(response => {
                setUserLogged(response.status === 200);
            })
            .catch(err => {
                console.error(err);
            })
    }, [history]);
    
    return userLoggeed;
}

export default useLoggedUser;