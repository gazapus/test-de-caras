import { useState, useEffect } from 'react';
import FaceGroup from './FaceGroup';
import faces from '../faces';
import styled from 'styled-components';
import brakpoints from '../utils/breakpoins';

const StyledAllFacesContainer = styled.div`
    display: grid;
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
        width: 80%;
    }
    @media ${brakpoints.desktop} { 
        grid-template-columns: repeat(4, 1fr); ;
        margin: 0 5% 0 5%;
        width: 70%;
    }
`

const Test = ({viewMode = false, previusSelectedFaces = []}) => {
    const [selectedFaces, setSelectedFaces] = useState([]);

    useEffect(() => {
        if(previusSelectedFaces.length) {
            setSelectedFaces(previusSelectedFaces);
        } else {
            let selectedFaces = Array(60).fill(-1);
            setSelectedFaces(selectedFaces);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    rightFace={viewMode ? group.different : -1}
                    key={index}
                />
            )}
        </StyledAllFacesContainer>
    )
}

export default Test;