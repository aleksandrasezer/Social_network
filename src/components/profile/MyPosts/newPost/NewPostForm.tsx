import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../common/formControls/FormControls";
import {maxLengthCreator, required} from "../../../../validators/validators";
import {Button} from "../../../Button/Button";
import s from './NewPostForm.module.css'

const maxLength60tn = maxLengthCreator(60000)

export type FormDataType = {
    newPost: string
}

const NewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div className={s.newPostForm}>
            <form onSubmit={props.handleSubmit}>

                <Field placeholder={'how do you feel'}
                       name={'newPost'}
                       component={Textarea}
                       validate={[required, maxLength60tn]}/>

                <span className={s.postButton}>
                    <Button>Post</Button>

                </span>
            </form>
        </div>
    )
}

export default reduxForm<FormDataType>({form: 'newPost'})(NewPostForm)