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
            name: '',
            lastname: '',
            email: '',
            password: ''
        },
        onSubmit: values => {
            handleSubmit(values)
        },
        validate: values => {
            let errors = {};
            if (values.name.length < 1) errors.name = "Nombre invalido";
            if (values.lastname.length < 1) errors.lastname = "Apellido invalido";
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
                <StyledLabel htmlFor="name">Nombre:</StyledLabel>
                <StyledInput
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    maxLength={50}
                    minLength={1}
                    error={formik.errors.name}
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
                    maxLength={50}
                    minLength={1}
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