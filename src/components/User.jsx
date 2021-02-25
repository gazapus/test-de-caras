import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import AuthService from '../services/auth.service';
import { Link, useHistory } from 'react-router-dom';
import pathnames from '../utils/paths';
import brakpoints from '../utils/breakpoins';
import useWindowSize from '../hooks/useWindowSize';

const UserContainer = styled.div`
    height: 100%;
`
const UserButton = styled.button`
    height: 100%;
    background-color: #00000000;
    border-style: none;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`
const UserAvatar = styled.img`
    height: 50%;
    border-radius: 50%;

`
const UserName = styled.span`
    font-size: 0.9em;
    font-family: RobotoLight;
    margin-top: 0.5em;
`
const LoginButton = styled.div`
    font-size: 1em;
    font-family: Roboto;
    text-decoration: none;
    color: white;
`

const DropdownUser = styled.div`
    background-color: #2d4463;
    position: absolute;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
    min-width: ${props => props.width}px;
    margin: 0;
    padding: 0.5em 0 0.5em 0;
    box-sizing: border-box;
    display: ${props => props.visible ? 'flex' : 'none'};
`

const DropdownUserList = styled.ul`
    margin: 0;
    padding: 0.2em 0 0.3em 0;
    display: flex;
    width: 100%;
    flex-direction: column;
`

const DropdownItemUser = styled.li`
    list-style-type: none;
    padding: 0;
    display: flex;
    margin: 0;
    align-items: center;
    height: 2.1em;
    width: 100%;
    text-indent: 1em;
    font-size: 0.9em;
    color: #f0f0f0;
    font-family: Roboto;
    box-sizing: border-box;
    &:hover {
        background-color: #3D5A80;
        cursor: pointer;
    }
    @media ${brakpoints.mobile} {
        font-size: 0.8em;
    }
`

function User({ logged }) {
    const [name, setName] = useState("*");
    const [avatarURL, setAvatarURL] = useState('')
    const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0, width: 0 });
    const profileButton = useRef();
    const [openOptions, setOpenOptions] = useState(false);
    const windowSize = useWindowSize();
    const history = useHistory();

    useEffect(() => {
        if (logged) {
            let user = AuthService.getCurrentUser();
            setName(user.name.toUpperCase());
            setAvatarURL(`https://ui-avatars.com/api/?name=${user.name}+${user.lastname}`);
        }
    }, [logged])

    useEffect(() => {
        if(profileButton.current) {
            let itemPosition =  profileButton.current.parentNode.getBoundingClientRect();
            setDropdownPosition({
                x: itemPosition.left,
                y: itemPosition.bottom,
                width: itemPosition.width
            })
        }
    }, [logged, windowSize])

    // check if the button isn't clicked
    useEffect(() => {
        function handleClickOut(event) {
            if(profileButton.current) {
                if(
                    event.clientY > profileButton.current.getBoundingClientRect().bottom || 
                    event.clientX < profileButton.current.getBoundingClientRect().left
                ) setOpenOptions(false)
            }            
        }
        window.addEventListener('click', handleClickOut);
        return () => window.removeEventListener('click', handleClickOut);  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleClick() {
        setOpenOptions(!openOptions)
    }

    function logout() {
        AuthService.logout();
        history.go(0);
    }

    return (
        <UserContainer ref={profileButton}>
            {
                logged ?
                    <UserButton onClick={handleClick} >
                        <UserAvatar src={avatarURL} alt="initials image" />
                        <UserName>{name}</UserName>
                    </UserButton>
                    :
                    <Link to={pathnames.login} style={{ textDecoration: 'none' }}>
                        <UserButton>
                            <LoginButton>ENTRAR</LoginButton>
                        </UserButton>
                    </Link>
            }
            <DropdownUser
                x={dropdownPosition.x}
                y={dropdownPosition.y}
                width={dropdownPosition.width}
                visible={openOptions}
            >
                <DropdownUserList>
                    <DropdownItemUser>Perfil</DropdownItemUser>
                    <DropdownItemUser onClick={logout}>Salir</DropdownItemUser>
                </DropdownUserList>
            </DropdownUser>
        </UserContainer>
    )
}

export default User;