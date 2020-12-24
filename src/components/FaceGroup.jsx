import styled from 'styled-components';

const StyledFaceImage = styled.img.attrs(props => ({
    backgroundColor: props => props.selected ? '#89a4ff' : '#FFFFFF00',
    borderColor: props => props.rightFace ? 'green' : '#00000000'
}))`
    background-color: ${props => props.backgroundColor};
    border-radius: 6px;
    border-color: #0000001B;
    border-style: solid;
    border-width: 2.5px;
    border-color: ${props => props.borderColor};
    box-sizing: border-box;
    width: 30%;

    &:hover {
        border-color: #0000001B;
        cursor: pointer;
        filter: brightness(0.9);
    }
`

const StyledFacesContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    border-style: solid;
    border-width: 2px;
    border-color: #0000003B;
    box-sizing: border-box;
    padding: 1%;
`

/**
 * Group of three faces
 * @param {src} face0  
 * @param {src} face1 
 * @param {src} face2 
 * @param {int} indexGroup face group index  
 * @param {function(int, int)} onSelectFace function to call when a face is chosen  
 * @param {int} selectedFace chosen face index [optional]
 * @param {int} rightFace chosen face index [optional]
 */
function FaceGroup({ face0, face1, face2, indexGroup, onSelectFace = (x,a) => {}, selectedFace = -1, rightFace = -1 }) {
    return (
        <StyledFacesContainer>
            <StyledFaceImage
                src={face0}
                onClick={() => onSelectFace(0, indexGroup)}
                selected={selectedFace === 0}
                rightFace={rightFace === 0}
            />
            <StyledFaceImage
                src={face1}
                onClick={() => onSelectFace(1, indexGroup)}
                selected={selectedFace === 1}
                rightFace={rightFace === 1}
            />
            <StyledFaceImage
                src={face2}
                onClick={() => onSelectFace(2, indexGroup)}
                selected={selectedFace === 2}
                rightFace={rightFace === 2}
            />
        </StyledFacesContainer>
    )
}

export default FaceGroup;