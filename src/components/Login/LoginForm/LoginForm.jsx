import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';
import { Input } from '../../FormsControls/FormControl';
import styles from './LoginForm.module.css';

const LoginForm = (props) => {
    const maxLength10 = maxLengthCreator(10);

    return (
        <form onSubmit={props.handleSubmit}>
            <label className={styles.item}>
                <Field type={"text"} name={'email'} placeholder={"Email"} 
                validate={[requiredField]} component={Input}/>
            </label>
            <label className={styles.item}>
                <Field type={'password'} name={'password'} placeholder={"Password"} 
                validate={[requiredField]} component={Input}/>
            </label>
            <label className={styles.item}>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
            </label>
            <button>Send</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm;