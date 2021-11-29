import React from "react"
import {Field,InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../Button/Button";
import {maxLengthCreator, required} from "../../validators/validators";
import {Input} from "../common/formControls/FormControls";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootState} from "../../redux/redux-store";
import s from "../common/formControls/FormControls.module.css";
import st from './Login.module.css'

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

            <div className={st.loginItem}>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={'input'} /> remember me
            </div>

            <div className={st.loginItem}>
                <Button onClick={() => {}} disabled={false}>Login</Button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


export const Login = () => {

    const isAuth = useSelector<RootState,boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }

    if (isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div className={st.loginContainer}>
        <h1 style={{fontWeight: 'bold'}}>Sign in here</h1>

        <LoginReduxForm onSubmit={onSubmit}/>

        <div className={st.free}>
            To log in get registered <a href='https://social-network.samuraijs.com/' target='_blank' rel="noreferrer">here</a><br/>
            or use common test account credentials: <br/>
            Email: <span style={{color: 'black'}}>korelskaia@gmail.com</span> <br/>
            Password: <span style={{color: 'black'}}>s8MjksG_Fus_GdY</span>
        </div>


    </div>
}
