import { useState, useEffect } from 'react';
import paths from '../utils/paths'
import { Link } from 'react-router-dom';
import FaceGroup from '../components/FaceGroup';
import faces from '../faces';
import styled from 'styled-components';
import brakpoints from '../utils/breakpoins';

const StyledAllFacesContainer = styled.div`
    display: grid;
    width: 98%;
    grid-gap: 1em;
    margin: 1%;
    box-sizing: border-box;

    @media ${brakpoints.mobile} { 
        grid-template-columns: repeat(2, 1fr); 
        margin: 1% 2% 0 2%;
        width: 96%;
    }

    @media ${brakpoints.tablet} { 
        grid-template-columns: repeat(3, 1fr); 
        margin: 0 3% 0 3%;
        width: 94%;
    }

    @media ${brakpoints.desktop} { 
        grid-template-columns: repeat(4, 1fr); ;
        margin: 0 5% 0 5%;
        width: 90%;
    }
`

const Test = () => {
    const [selectedFaces, setSelectedFaces] = useState([]);

    useEffect(() => {
        let selectedFaces = Array(60);
        selectedFaces.fill(-1);
        setSelectedFaces(selectedFaces);
    }, []);

    function onSelectFace(indexFace, indexGroup) {
        let newSelectedFaces = [...selectedFaces];
        newSelectedFaces[indexGroup] = indexFace;
        setSelectedFaces(newSelectedFaces);
    }

    return (
        <StyledAllFacesContainer>
            {faces.map((group, index) =>
                <FaceGroup
                    face0={require("../images/faces-test/" + group.face0).default}
                    face1={require("../images/faces-test/" + group.face1).default}
                    face2={require("../images/faces-test/" + group.face2).default}
                    indexGroup={index}
                    selectedFace={selectedFaces[index]}
                    onSelectFace={onSelectFace}
                    // rightFace={group.different}
                    key={index}
                />
            )}
        </StyledAllFacesContainer>
    )
}

export default Test;