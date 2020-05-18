export const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)
export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)

export const fixLength = fix => value =>
    value && value.length === fix ? `Must be 10 digits` : undefined
export const fixLength10 = fixLength(9)
export const fixMinLength = fix => value =>
    value && value.length < fix ? `Must be 10 digits` : undefined
export const minLength10 = fixMinLength(10)
export const maxfixLength = fix => value =>
    value && value.length > fix ? `Must be 10 digits` : undefined
export const maxLength10 = maxfixLength(10)

export const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined
