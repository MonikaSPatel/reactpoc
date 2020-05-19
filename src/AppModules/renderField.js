import React from 'react';
import { Input, Lable, Select, InlineDiv, Error } from './FormElement';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import 'react-widgets/dist/css/react-widgets.css'

import momentLocaliser from 'react-widgets-moment-localizer'

momentLocaliser(moment)

export const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div>
            <Lable>{label}</Lable>
            <Input {...input} placeholder={label} type={type} />
            {touched &&
                ((error && <Error>{error}</Error>) ||
                    (warning && <Error>{warning}</Error>))}
        </div>
    )


const departments = ['Management', 'Developement', 'Finance', 'Security', 'Cleaning']

export const renderDepartmentSelector = ({ input, label, meta: { touched, error } }) => (
    <div>
        <Lable>{label}</Lable>
        <Select {...input}>
            <option value="">Select a department...</option>
            {departments.map(val => (
                <option value={val} key={val}>
                    {val}
                </option>
            ))}
        </Select>
        {touched && error && <span>{error}</span>}
    </div>
)

export const renderRadio = ({ input, meta: { touched, error, warning } }) => (
    <InlineDiv>
        <Input {...input} type="radio" />
        {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
    </InlineDiv>
)
export const renderCheckbox = ({ input, label, id, meta: { touched, error, warning } }) => (
    <InlineDiv>
        <label htmlFor={id}>{label}</label>
        <Input {...input} type="checkbox" />
        {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
    </InlineDiv>
)

export const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
    <InlineDiv size="1em">
        <DateTimePicker
            dropUp
            onChange={onChange}
            time={showTime}
            format="DD MMM YYYY"
            value={!value ? null : new Date(value)}
        />
    </InlineDiv>
