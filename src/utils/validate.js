import emailValidator from 'email-validator';

export const validate = ({email, password}) => {
    const errors = {};

    if(!email) errors.email = 'email is required';
    else if (!emailValidator.validate(email)) errors.email = 'invalid email';

    if(!password) errors.password = 'password is required';
    else if ( password.length < 8 ) errors.password = 'password must be more than 8 characters';

    return errors;
}