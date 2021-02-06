import { useFormik } from 'formik';
import styled from 'styled-components';
import { 
    StyledInput, 
    StyledLabel, 
    StyledErrorMessage, 
    StyledForm
} from '../styles/StyledForm';
import Button from './Button';
import Validators from '../utils/validators';

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

function FormUser({handleSubmit}) {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        onSubmit: values => {
            handleSubmit(values)
        },
        validate: values => {
            let errors = {};
            if (values.firstName.length < 1) errors.firstName = "Nombre invalido";
            if (values.lastName.length < 1) errors.lastName = "Apellido invalido";
            if (!Validators.validateEmail(values.email)) errors.email = "Dirección de email invalida";
            if (values.password.length < 4 || values.password.length > 20) errors.password = "Password inválido";
            return errors;
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    return (
        <FormContainer>
            <StyledForm onSubmit={formik.handleSubmit}>
                <StyledLabel htmlFor="firstName">Nombre:</StyledLabel>
                <StyledInput
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    maxLength={50}
                    minLength={1}
                    error={formik.errors.firstName}
                />
                <StyledErrorMessage>{formik.errors.firstName}</StyledErrorMessage>

                <StyledLabel htmlFor="lastName">Apellido:</StyledLabel>
                <StyledInput
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    error={formik.errors.lastName}
                    maxLength={50}
                    minLength={1}
                />
                <StyledErrorMessage>{formik.errors.lastName}</StyledErrorMessage>

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
                />
                <StyledErrorMessage>{formik.errors.email}</StyledErrorMessage>

                <StyledLabel htmlFor="email">Password:</StyledLabel>
                <StyledInput
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.errors.password}
                    maxLength={20}
                    minLength={6}
                />
                <StyledErrorMessage>{formik.errors.password}</StyledErrorMessage>

                <StyledCenter>
                    <Button type="submit">Aceptar</Button>
                </StyledCenter>
            </StyledForm>
        </FormContainer>
    )
}

export default FormUser;