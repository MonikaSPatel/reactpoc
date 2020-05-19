import React from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Button, BodySection, Lable, Span } from './FormElement';

const saveData = (values) => {
    console.log(values);
}

let Review = props => {
    const {
        fullName,
        sex,
        email,
        department,
        employee_id,
        designation,
        language,
        contact_no,
        handleSubmit,
        pristine,
        submitting,
        previousPage
    } = props
    return (
        <BodySection>
            <form onSubmit={handleSubmit}>
                <div><Lable size="0.5em">Name:</Lable><Span>{fullName}</Span></div>
                <div><Lable size="0.5em">Email:</Lable><Span>{email}</Span></div>
                <div><Lable size="0.5em">Sex:</Lable><Span>{sex}</Span></div>
                <div><Lable size="0.5em">Contact No:</Lable><Span>{contact_no}</Span></div>
                <div><Lable size="0.5em">Employee Id:</Lable><Span>{employee_id}</Span></div>
                <div><Lable size="0.5em">Department:</Lable><Span>{department}</Span></div>
                <div><Lable size="0.5em">Designation:</Lable><Span>{designation}</Span></div>
                <div><Lable size="0.5em">Language:</Lable><Span>{language}</Span></div>
                <div>
                    <Button type="button" primary onClick={previousPage}>
                        Previous
        </Button>

                    <Button type="submit" primary disabled={pristine || submitting}>
                        Save
          </Button>

                </div>
            </form>
        </BodySection >
    )
}

Review = reduxForm({
    form: 'user',
    onSubmit: saveData,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(Review)

const selector = formValueSelector('user') // <-- same as form name
Review = connect(state => {
    const { firstName, lastName, sex, email, employee_id, department, designation, language, contact_no } = selector(state, 'firstName', 'lastName', 'sex', 'email', 'employee_id', 'department', 'designation', 'language', 'contact_no')
    return {
        fullName: `${firstName || ''} ${lastName || ''}`,
        sex,
        email,
        employee_id,
        department,
        designation,
        contact_no,
        language: `${(language) ? language.toString() : ''}`
    }
})(Review)

export default Review
