import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFile, faTable, faCog} from '@fortawesome/free-solid-svg-icons'
import brakpoints from '../utils/breakpoins';

library.add(faFile, faTable, faCog)

const AppBarContainer = styled.nav`
    display: flex;
    width: 100%;
    height: 3.7em;
    box-sizing: border-box;
    padding: 0 0.2em 0 0.2em;
    background-color: #3D5A80;
`
const AppBarLeft = styled.ul`
    display: flex;
    flex-grow: 4;
    margin: 0;
    padding: 0;
    min-width: 0;
`
const AppBarRight = styled.ul`
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    padding: 0;
    margin: 0;
`
const AppBarItem = styled.li`
    list-style-type: none;
    display: ${props => props.visible ? 'flex': 'none'};
    justify-content: center;
    align-items: center;
    color: white;
    font-family: Roboto;
    &:hover {
        background-color: #29324177;
        cursor: pointer;
    }
    span {
        @media ${brakpoints.mobile} { 
            display: none;
        }
        @media ${brakpoints.tablet} { 
            display: block;
        }
    }
    @media ${brakpoints.mobile} {
        font-size: 1.3em;
        padding-left: 0.3em;
        padding-right: 0.3em;
    }
    @media ${brakpoints.tablet} {
        font-size: 0.9em;
        padding: 0 1.4em 0 1.4em;
    }
`
const AppBarLogo = styled.li`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 40%;
    &:hover {
        cursor: pointer;
    }
    @media ${brakpoints.mobile} {
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
    @media ${brakpoints.tablet} {
        padding: 0 1.4em 0 1.4em;
    }
`
const Dropdown = styled.ul`
    background-color: #2d4463;
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x + 2}px;
    min-width: ${props => props.width}px;
    margin: 0;
    padding: 0;
    display: ${props => props.visible ? 'flex': 'none'};
`
const DropdownList = styled.ul`
    margin: 0;
    padding: 0.2em 0 0.3em 0;
    width: 100%;
`
const DropdownItem = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 2em;
    width: 100%;
    text-indent: 1em;
    font-size: 0.8em;
    color: #f0f0f0;
    font-family: Roboto;
    box-sizing: border-box;
    padding-right: 2em;
    &:hover {
        background-color: #3D5A80;
        cursor: pointer;
    }
    .text {
        font-family: Roboto;
    }
`

function AppBar({ logo = <></>, items = [], right = <></> }) {

    const refItem1 = useRef();
    const refItem2 = useRef();
    const refItem3 = useRef();
    const refItem4 = useRef();
    const appBarRef = useRef();

    const refs = [refItem1, refItem2, refItem3, refItem4];

    const [dropdownPositions, setDropdownPosition] = useState(
        [{ x: 0, y: 0, width: 0 }, { x: 0, y: 0, width: 0 }, { x: 0, y: 0, width: 0 }, { x: 0, y: 0, width: 0 }]
    )
    const [dropdownVisible, setDropdownVisible] = useState(-1);

    useEffect(() => {
        let dropdownPositions = [];
        for (let i = 0; i < items.length; i++) {
            let itemPosition = refs[i].current.getBoundingClientRect();
            dropdownPositions.push({
                x: itemPosition.left,
                y: itemPosition.bottom,
                width: itemPosition.width
            })
        }
        setDropdownPosition(dropdownPositions);
    }, [items])

    useEffect(() => {
        function handleClickOut(event) {
            if(appBarRef.current) {
                if(
                    event.clientY > appBarRef.current.getBoundingClientRect().bottom || 
                    event.clientX > refs[items.length -1].current.getBoundingClientRect().right
                ) setDropdownVisible(-1)
            }            
        }
        window.addEventListener('click', handleClickOut);
        return () => window.removeEventListener('click', handleClickOut);        
    }, [])

    function handleClick(itemIndex) {
        if(items[itemIndex].subItems) {
            if(dropdownVisible !== itemIndex) {
                setDropdownVisible(itemIndex);
            } else {
                setDropdownVisible(-1);
            }
        } else {
            setDropdownVisible(-1);
            items[itemIndex].action();
        }
    }

    return (
        <AppBarContainer ref={appBarRef}>
            <AppBarLeft>
                <AppBarLogo>{logo}</AppBarLogo>
                {items.map((e, index) =>
                    <AppBarItem
                        ref={refs[index]}
                        onClick={() => handleClick(index)}
                        key={index}
                        visible={e.visible}
                    >
                        <FontAwesomeIcon icon={e.icon} style={{ marginRight: '0.4em' }}/>
                        <span>{e.name}</span>
                    </AppBarItem>
                )}
            </AppBarLeft>
            <AppBarRight>
                <AppBarItem visible>{right}</AppBarItem>
            </AppBarRight>
            {items.map((e, index) =>
                <Dropdown
                    x={dropdownPositions[index].x}
                    y={dropdownPositions[index].y}
                    width={dropdownPositions[index].width}
                    visible={dropdownVisible === index}
                    key={index}
                >
                    {e.subItems ?
                        <DropdownList>
                            {e.subItems.map(e => 
                                <DropdownItem 
                                    key={e.name}
                                    onClick={e.action}
                                >
                                    {e.name}
                                </DropdownItem>
                            )}
                        </DropdownList>
                        :
                        ''
                    }
                </Dropdown>
            )}
        </AppBarContainer>
    )
}


export default AppBar;