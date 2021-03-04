import { useFormik } from 'formik';
import styled from 'styled-components';
import {
    StyledInput,
    StyledLabel,
    StyledErrorMessage,
    StyledForm,
    StyledCheckbox,
    StyledSelect,
} from '../styles/StyledForm';
import { StyledH3 } from '../styles/StyledTitles';
import Button from './Button';
import Spinner from '../components/Spinner';
import { useState } from 'react';
import { getTodayDateString } from '../utils/functions';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    margin-bottom: 2em;
`

const StyledCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 2em 0 1em 0;
`

const StyledButtonText = styled.button.attrs(props => ({
    type: 'button'
}))`
    font-family: 'Roboto', sans-serif;
    font-size: 1.1em;
    color: #000FFF;
    margin: 0 0 1.5em 0;    
    font-weight: bold;
    border-style: none;
    text-indent: 1em;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`

function FormGroup({ handleSubmit, loading = false }) {
    const [institutionalInformation, setInstitutionalInformation] = useState(true);
    const [moreOptions, setMoreOptions] = useState(false);

    const formik = useFormik({
        initialValues: {
            description: '',
        },
        onSubmit: values => {
            handleSubmit(values)
        },
        validate: values => {
            let errors = {};
            if (values.description.length > 50) errors.description = "La descripción no debe tener mas de 50 caracteres";
            if (values.description.length < 1) errors.description = "La descripción no puede quedar vacía";
            if (values.max_uses < 0) errors.max_uses = "El numero de usos no puede ser negativo";
            return errors;
        },
        validateOnChange: false,
        validateOnBlur: false,
        enableReinitialize: true
    });

    return (
        <FormContainer>
            <StyledForm onSubmit={formik.handleSubmit} >
                <StyledH3
                    color="#293241"
                    style={{ margin: '0 0 1.5em 0', fontWeight: 'bold' }}
                >
                    NUEVO GRUPO
                </StyledH3>
                <StyledLabel htmlFor="description">Descripción*:</StyledLabel>
                <StyledInput
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    error={formik.errors.description}
                    placeholder="nombre o comentario para identificar este grupo"
                />
                <StyledErrorMessage>{formik.errors.description}</StyledErrorMessage>

                <div style={{ marginBottom: '1em', width: '100%' }}>
                    <StyledCheckbox
                        checked={institutionalInformation}
                        onChange={() => setInstitutionalInformation(!institutionalInformation)}
                    />
                    <StyledLabel htmlFor="description">Solicitar información institucional:</StyledLabel>
                </div>
                <StyledLabel htmlFor="institution">Institución:</StyledLabel>
                <StyledInput
                    id="institution"
                    name="institution"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.institution}
                    error={formik.errors.institution}
                    disabled={institutionalInformation}
                />
                <StyledErrorMessage>{formik.errors.institution}</StyledErrorMessage>

                <StyledLabel htmlFor="grade">Grado:</StyledLabel>
                <StyledInput
                    id="grade"
                    name="grade"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.grade}
                    error={formik.errors.grade}
                    disabled={institutionalInformation}

                />
                <StyledErrorMessage>{formik.errors.grade}</StyledErrorMessage>

                <StyledButtonText onClick={() => setMoreOptions(!moreOptions)}>
                    {moreOptions ? 'Menos opciones' : 'Mas opciones'}
                </StyledButtonText>
                {
                    moreOptions ?
                    <>
                        <StyledLabel htmlFor="max_uses">Máximos usos:</StyledLabel>
                        <StyledInput
                            id="max_uses"
                            name="max_uses"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.max_uses}
                            error={formik.errors.max_uses}
                            placeholder={99}
                        />
                        <StyledErrorMessage>{formik.errors.max_uses}</StyledErrorMessage>

                        <StyledLabel htmlFor="expiration_time">Expiración:</StyledLabel>
                        <StyledInput
                            id="expiration_time"
                            name="expiration_time"
                            type="date"
                            min={getTodayDateString()}
                            onChange={formik.handleChange}
                            value={formik.values.expiration_time}
                            error={formik.errors.expiration_time}
                        />
                        <StyledErrorMessage>{formik.errors.expiration_time}</StyledErrorMessage>

                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                                <StyledLabel htmlFor="country">Baremo a usar: </StyledLabel>
                                <StyledSelect
                                    name="country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                >
                                    <option value="España" label="España" />
                                    <option value="Argentina" label="Argentina" />
                                </StyledSelect>
                            </div>
                            <StyledErrorMessage>{formik.errors.country}</StyledErrorMessage>
                        </div>
                    </>
                    :<></>
                }
                <StyledCenter>
                    {loading ? <Spinner size={2} /> : ''}
                    <Button type="submit" disabled={loading}>CREAR</Button>
                </StyledCenter>
            </StyledForm>
        </FormContainer>
    )
}

export default FormGroup;