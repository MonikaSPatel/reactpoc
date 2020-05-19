import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Lable, Button,BodySection } from './FormElement';
import { required, maxLength15, minLength2,number ,phoneNumber,email} from './Validations';
import { renderField, renderRadio,renderDateTimePicker } from './renderField';

const Personal = props => {
    const { handleSubmit } = props
    return (
        <BodySection>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        label="First Name"
                        name="firstName"
                        component={renderField}
                        type="text"
                        placeholder="First Name"
                        validate={[required, maxLength15, minLength2]}
                    />
                </div>
                <div>
                    <Field
                        label="Last Name"
                        name="lastName"
                        component={renderField}
                        type="text"
                        placeholder="Last Name"
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field
                        label="Email"
                        component={renderField}
                        name="email"
                        type="email"
                        placeholder="Email"
                        validate={[required, email]}
                    />
                </div>
                <div>
                    <Lable>Sex</Lable>

                    <Field name="sex"
                        component={renderRadio} type="radio" value="Male" />{' '} Male
                <Field name="sex" component={renderRadio} type="radio" value="Female" />{' '}Female
                <Field name="sex" component={renderRadio} type="radio" value="Other" />{' '}Other
    
            </div>
            <div>
                <Lable>Date Of Birth</Lable>
                    <Field
                        name="date_of_birth"
                        component={renderDateTimePicker}
                        showTime={false}
                    />
                </div>
            <div>
                    <Field
                        label="Contact No"
                        name="contact_no"
                        component={renderField}
                        type="number"
                        validate={[required, number, phoneNumber]}
                        placeholder="Contact No"
                    />
                </div>
                <div>
                    <Button type="submit" primary className="next">Next</Button>
                </div>
            </form>
        </BodySection>
    )
}

export default reduxForm({
    form: 'user',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(Personal)


//export default connect()(Personal);