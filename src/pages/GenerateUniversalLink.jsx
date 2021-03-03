import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GroupService from '../services/group.service';
import { StyledH2, StyledP } from '../styles/StyledTitles';
import PageContainer from '../components/PageContainer';
import brakpoints from '../utils/breakpoins';
import Spinner from '../components/Spinner';
import CopyableText from '../components/CopyableText';
import pathnames from '../utils/paths';

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    @media ${brakpoints.mobile} { 
        padding: 1em;
    }
    @media ${brakpoints.desktop} { 
        padding: 3em;
    }
`
const StyledBox = styled.div`
    align-items: center;
    background-color: ${props => props.color || '#f0f0f0'};
    border-style: solid;
    border-color: ${props => props.color || '#98C1D9'};
    border-width: 2px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1em;
    min-height: 1em;
    @media ${brakpoints.mobile} { 
        width: 96vw;
        padding: 1em 0.5em 1em 0.5em;
    }
    @media ${brakpoints.tablet} { 
        width: 80vw;
        padding: 1em 2em 1em 2em;
    }
    @media ${brakpoints.desktop} { 
        width: 50vw;
    }
    @media ${brakpoints.desktopL} { 
        width: 40vw;
    }
`

function GenerateUniversalLink() {
    const [loading, setLoading] = useState(true);
    const [link, setLink] = useState("");

    useEffect(() => {
        GroupService.getUniversal()
            .then(res => setLink(`${pathnames.server}test/start/${res.data.id}`))
            .catch(err => alert(err.response.data.message))
            .finally(() => setLoading(false))
    }, [])

    return (
        <PageContainer>
            <StyledContainer>
                <StyledBox>
                    <StyledH2 color="#293241">Su enlace del Test:</StyledH2>
                    {
                        loading ?
                            <Spinner size="2" />
                            :
                            <>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <CopyableText>{link}</CopyableText>
                                </div>
                            </>
                    }
                    <StyledP textAlign="center" color="#202020">
                        Los resultados de las personas que realicen el test desde este enlace se guaradará en tu
                        sección de <strong>Registros</strong>, en la sección <strong>Tests sin grupos</strong>.
                    </StyledP>
                </StyledBox>
            </StyledContainer>
        </PageContainer>
    )
}

export default GenerateUniversalLink;