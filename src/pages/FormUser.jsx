import { useContext } from 'react';
import { ThemeContext } from '../ContextGenerator';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { 
    StyledInput, 
    StyledLabel, 
    StyledErrorMessage, 
    StyledForm,
    StyledCheckbox, 
    StyledCheckboxContainer,
    StyledCheckboxesContainer
} from '../styles/StyledForm';
import Button from '../components/Button';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
`

const StyledTitle = styled.h3`
    font-size: 2em;
    text-transform: uppercase;
    font-family: 'Cuprum-Bold';
`

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 2em 0 1em 0;
`

function FormUser() {
    const { setUserData } = useContext(ThemeContext);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            age: '',
            sex: ''
        },
        onSubmit: values => {
            setUserData({
                name: values.firstName,
                lastname: values.lastName,
                age: values.age,
                sex: values.age
            });
        },
        validate: values => {
            let errors = {};
            if (values.firstName.length < 2) errors.firstName = "Nombre invalido";
            if (values.lastName.length < 2) errors.lastName = "Apellido invalido";
            if (values.age < 3 || values.age > 18) errors.age = "Edad invalida";
            if (values.sex !== "male" && values.sex !== "female") errors.sex = "Debe seleccionar un sexo";
            return errors;
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    return (
        <FormContainer>
            <StyledTitle>Datos personales:</StyledTitle>
            <StyledForm onSubmit={formik.handleSubmit}>
                <StyledLabel htmlFor="firstName">Nombre:</StyledLabel>
                <StyledInput
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    maxLength={40}
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
                    maxLength={40}
                />
                <StyledErrorMessage>{formik.errors.lastName}</StyledErrorMessage>

                <StyledLabel htmlFor="age">Edad:</StyledLabel>
                <StyledInput
                    id="age"
                    name="age"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    error={formik.errors.age}
                />
                <StyledErrorMessage>{formik.errors.age}</StyledErrorMessage>

                <StyledColumn>
                    <StyledLabel>Sexo:</StyledLabel>
                    <StyledCheckboxesContainer>
                        <StyledCheckboxContainer>
                            <StyledCheckbox
                                id="male"
                                name="sex"
                                type="radio"
                                onChange={formik.handleChange}
                                value="male"
                            />
                            <label htmlFor="male">Masculino</label>
                        </StyledCheckboxContainer>
                        <StyledCheckboxContainer>
                            <StyledCheckbox
                                id="female"
                                name="sex"
                                type="radio"
                                onChange={formik.handleChange}
                                value="female"
                            />
                            <label htmlFor="female">Femenino</label>
                        </StyledCheckboxContainer>
                    </StyledCheckboxesContainer>
                    <StyledErrorMessage>{formik.errors.sex}</StyledErrorMessage>
                </StyledColumn>

                <StyledCenter>
                    <Button type="submit">Aceptar</Button>
                </StyledCenter>
            </StyledForm>
        </FormContainer>
    )
}

export default FormUser;


/*
        Auto PC:
            name, lastname, age, sex, // institute, grade
        Free Web:
            name, age, sex
        Premium Web:
            name, lastname, age, sex (=institute, grade)
*/
