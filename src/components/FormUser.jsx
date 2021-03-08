import { useFormik } from 'formik';
import styled from 'styled-components';
import {
    StyledInput,
    StyledLabel,
    StyledErrorMessage,
    StyledForm,
    StyledRadio,
    StyledRadioContainer,
    StyledRadioesContainer
} from '../styles/StyledForm';
import Button from './Button';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    margin-bottom: 2em;
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

function FormUser({ handleSubmit, requestInstitutional }) {
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            age: '',
            sex: '',
            institution: '',
            grade: ''
        },
        onSubmit: values => {
            handleSubmit(values)
        },
        validate: values => {
            let errors = {};
            if (values.name.length < 2) errors.name = "Nombre muy corto";
            if (values.lastname.length < 2) errors.lastname = "Apellido muy corto";
            if (values.name.length > 50) errors.name = "Nombre muy largo";
            if (values.lastname.length > 50) errors.lastname = "Apellido muy largo";
            if (values.age < 2) errors.age = "La edad debe ser mayor";
            if (values.age > 100) errors.age = "La edad debe ser menor";
            if (values.sex !== "male" && values.sex !== "female") errors.sex = "Debe seleccionar un sexo";
            if (requestInstitutional && values.institution.length < 2) errors.institution = "Nombre de institución muy corto";
            if (requestInstitutional && values.grade.length < 1) errors.grade = "Nombre del grado muy corto";
            if (requestInstitutional && values.institution.length > 50) errors.institution = "Nombre de institución muy largo";
            if (requestInstitutional && values.grade.length > 50) errors.grade = "Nombre del grado muy largo";
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
                    maxLength={40}
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
                    maxLength={40}
                />
                <StyledErrorMessage>{formik.errors.lastname}</StyledErrorMessage>

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
                    <StyledRadioesContainer>
                        <StyledRadioContainer>
                            <StyledRadio
                                id="male"
                                name="sex"
                                type="radio"
                                onChange={formik.handleChange}
                                value="male"
                            />
                            <label htmlFor="male">Masculino</label>
                        </StyledRadioContainer>
                        <StyledRadioContainer>
                            <StyledRadio
                                id="female"
                                name="sex"
                                type="radio"
                                onChange={formik.handleChange}
                                value="female"
                            />
                            <label htmlFor="female">Femenino</label>
                        </StyledRadioContainer>
                    </StyledRadioesContainer>
                    <StyledErrorMessage>{formik.errors.sex}</StyledErrorMessage>
                </StyledColumn>

                {
                    requestInstitutional ?
                        <>
                            <StyledLabel htmlFor="institution">Institución:</StyledLabel>
                            <StyledInput
                                id="institution"
                                name="institution"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.institution}
                                error={formik.errors.institution}
                                maxLength={50}
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
                                maxLength={50}
                            />
                            <StyledErrorMessage>{formik.errors.grade}</StyledErrorMessage>
                        </>
                        : ''
                }
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
