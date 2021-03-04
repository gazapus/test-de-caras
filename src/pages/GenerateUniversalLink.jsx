import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GroupService from '../services/group.service';
import { StyledH2, StyledP } from '../styles/StyledTitles';
import { StyledShareButton } from '../styles/StyledUtilities';
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
    const [whatsappURL, setWhatsappURL] = useState("https://api.whatsapp.com/send?text=Resuelve%20el%20test%20de%20caras%20siguiendo%20este%20enlace:%20");
    const [mailURL, setMailURL] = useState("mailto:?subject=Enlace%20para%20la%20realización%20del%20Test%20Caras-R&body=Resuelve%20el%20test%20de%20caras%20siguiendo%20este%20enlace:%20");

    useEffect(() => {
        GroupService.getUniversal()
            .then(res => {
                let newLink = `${pathnames.server}test/start/${res.data.id}`;
                setLink(newLink)
                setWhatsappURL(whatsappURL + newLink.replace('#', '%23'));
                setMailURL(mailURL + newLink);
            })
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
                        Los resultados de las personas que realicen el test desde este enlace se guardarán
                        tus <strong>registros</strong>, en la sección de <strong>tests individuales</strong>.
                    </StyledP>
                    {
                        !loading ?
                            <>
                                <StyledShareButton backgroundColor="#0547c2" href={mailURL} target="_blank">
                                    Compartir por correo
                                </StyledShareButton>
                                <StyledShareButton backgroundColor="#107c10" href={whatsappURL} target="_blank">
                                    Compartir por whatsapp
                                </StyledShareButton>
                            </>
                            :
                            <></>
                    }
                </StyledBox>
            </StyledContainer>
        </PageContainer>
    )
}

export default GenerateUniversalLink;