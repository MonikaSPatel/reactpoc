import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField, renderDepartmentSelector, renderCheckbox } from './renderField'
import { Button, BodySection, Lable } from './FormElement';
import { required } from './Validations';
import CheckboxGroup from './CheckboxGroup';

const languages = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Gujarati', label: 'Gujarati' },
];


const Employement = props => {
    const { handleSubmit, previousPage } = props
    return (
        <BodySection>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="employee_id"
                        type="text"
                        component={renderField}
                        label="Employee Id"
                        validate={[required]}
                    />
                </div><div>
                    <Field name="department"
                        component={renderDepartmentSelector}
                        label="Department"
                        validate={[required]}
                    />
                </div><div>
                    <Field name="designation"
                        type="text"
                        component={renderField}
                        label="Designation"
                        validate={[required]}
                    />
                </div>
                <div>
                    <Lable>Language known</Lable>
                    <CheckboxGroup name="language" options={languages} component={renderCheckbox} />

                </div>

                <div>
                    <Button type="button" primary onClick={previousPage}>
                        Previous
        </Button>
                    <Button type="submit" primary>
                        Next
        </Button>
                </div>
            </form>
        </BodySection>
    )
}

export default reduxForm({
    form: 'user',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(Employement)
