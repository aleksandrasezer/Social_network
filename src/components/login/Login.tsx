import React from "react"
import {Field,InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../Button/Button";
import {maxLengthCreator, required} from "../../validators/validators";
import {Input} from "../common/formControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootState} from "../../redux/redux-store";
import s from "../common/formControls/FormControls.module.css";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength25 = maxLengthCreator(25)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[required, maxLength25]}/>
            </div>

            <div>
                <Field placeholder={'Password'}
                       type='password'
                       name={'password'}
                       component={Input}
                       validate={[required, maxLength25]}/>
            </div>

            { props.error && <div className={s.loginFormError}>
                {props.error}
            </div>}

            <div>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={'input'} /> remember me
            </div>

            <div>
                <Button onClick={() => {}} disabled={false}>Login</Button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Sign in here</h1>

        <LoginReduxForm onSubmit={onSubmit}/>

    </div>
}

const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth
    }
}

 export default connect(mapStateToProps, {login})(Login)