import AuthService from "../services/auth.service";
import { useEffect, useState } from 'react';

function useLoggedUser() {
    const [userLoggeed, setUserLogged] = useState(false);

    useEffect(() => {
        AuthService.isLogged()
            .then(response => {
                setUserLogged(response.status === 200);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    return userLoggeed;
}

export default useLoggedUser;