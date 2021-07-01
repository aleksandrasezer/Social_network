import React from "react"
import {Field,InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../Button/Button";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component={'input'}/>
            </div>

            <div>
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>

            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
            </div>

            <div>
                <Button onClick={() => {}} disabled={false}>Login</Button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>Sign in here</h1>

        <LoginReduxForm onSubmit={onSubmit}/>

    </div>
}

