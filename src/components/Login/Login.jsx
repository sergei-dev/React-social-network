import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    return (
        <div>
            <h2>login</h2>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(null, {
    login
})(Login);