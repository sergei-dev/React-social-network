import React from 'react';
import styles from './FormControl.module.css'

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={`${styles.formControl} ${hasError ? styles.errorField : ''}`}>
            <div>
                {props.children}
            </div>
            { hasError && <span className={styles.error}>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}