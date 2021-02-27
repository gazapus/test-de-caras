import { useFormik } from 'formik';
import styled from 'styled-components';
import {
    StyledInput,
    StyledLabel,
    StyledErrorMessage,
    StyledForm,
} from '../styles/StyledForm';
import Button from './Button';
import Validators from '../utils/validators';
import Spinner from '../components/Spinner';
import { useState } from 'react';

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

function FormLogin({ handleSubmit, loading = false, defaultName, defaultLastname, defaultEmail }) {
    const [enabledModification, setEnabledModification] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: defaultName,
            lastname: defaultLastname,
            email: defaultEmail,
            newPassword: ''
        },
        onSubmit: values => {
            handleSubmit(values)
        },
        validate: values => {
            let errors = {};
            if (values.name.length > 50) errors.name = "Nombre muy largo";
            if (values.name.length < 3) errors.name = "Nombre muy corto";
            if (values.lastname.length > 50) errors.lastname = "Apellido muy largo";
            if (values.lastname.length < 3) errors.lastname = "Apellido muy corto";
            if (!Validators.validateEmail(values.email)) errors.email = "Dirección de email invalida";
            if (values.newPassword.length > 20) errors.newPassword = "Password muy largo";
            if (values.newPassword.length < 5 && values.newPassword.length !== 0) errors.newPassword = "Password muy corto";
            return errors;
        },
        validateOnChange: false,
        validateOnBlur: false,
        enableReinitialize: true
    });

    function cancelModification() {
        formik.setValues({
            name: defaultName,
            lastname: defaultLastname,
            email: defaultEmail,
            newPassword: ''
        })
        setEnabledModification(false);
    }

    return (
        <FormContainer>
            {
                !enabledModification ?
                    <StyledCenter>
                        <Button type="submit" size="small" handleClick={() => setEnabledModification(true)}>Modificar</Button>
                    </StyledCenter>
                    :
                    <div style={{ height: '5.3em' }}></div>
            }

            <StyledForm onSubmit={formik.handleSubmit} >
                <StyledLabel htmlFor="name">Nombre:</StyledLabel>
                <StyledInput
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name}
                    minLength={2}
                    maxLength={50}
                    disabled={!enabledModification}
                    align={enabledModification ? 'left' : 'center'}
                />
                <StyledErrorMessage>{formik.errors.name}</StyledErrorMessage>

                <StyledLabel htmlFor="lastname">Apellido:</StyledLabel>
                <StyledInput
                    id="lastname"
                    name="lastname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                    error={formik.errors.lastname}
                    minLength={2}
                    maxLength={50}
                    disabled={!enabledModification}
                    align={enabledModification ? 'left' : 'center'}
                />
                <StyledErrorMessage>{formik.errors.lastname}</StyledErrorMessage>

                <StyledLabel htmlFor="email">Email:</StyledLabel>
                <StyledInput
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email}
                    minLength={4}
                    maxLength={50}
                    disabled={!enabledModification}
                    align={enabledModification ? 'left' : 'center'}
                />
                <StyledErrorMessage>{formik.errors.email}</StyledErrorMessage>

                {
                    enabledModification ?
                        <>
                            <StyledLabel htmlFor="newPassword">Password:</StyledLabel>
                            <StyledInput
                                id="newPassword"
                                name="newPassword"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.newPassword}
                                error={formik.errors.newPassword}
                                maxLength={20}
                                minLength={6}
                                placeholder="Solo si desea cambiar su contraseña"
                                autoComplete="off"
                            />
                            <StyledErrorMessage>{formik.errors.newPassword}</StyledErrorMessage>
                        </>
                        :
                        <></>
                }

                {
                    enabledModification ?
                        <>
                            <StyledCenter>
                                <Button type="submit" disabled={loading}>Guardar</Button>
                            </StyledCenter>
                            <StyledCenter>
                                <Button size="small" disabled={loading} handleClick={cancelModification}>Cancelar</Button>
                            </StyledCenter>
                        </>
                        :
                        <></>
                }


                <StyledCenter>
                    {loading ? <Spinner size={2} /> : ''}
                </StyledCenter>
            </StyledForm>
        </FormContainer>
    )
}

export default FormLogin;