import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faUserCircle);

const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const UserName = styled.span`
    font-size: 0.9em;
    font-family: RobotoLight;
    color: '#e0e0e0';
`

function User({username = "invitado"}) {
    return (
        <UserContainer>
            <FontAwesomeIcon icon="user-circle" size="lg"/>
            <UserName>{username}</UserName>
        </UserContainer>
    )
}

export default User;