import {maxLengthCreator, required} from "../../../../../validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../../common/formControls/FormControls";
import {Button} from "../../../../Button/Button";
import s from "./NewMessage.module.css";

export type FormDataType = {
    massage: string
}

const maxLength5000 = maxLengthCreator(5000)

const MessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div className={s.newMessageForm}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'message'}
                           name={'message'}
                           component={Textarea}
                           validate={[required, maxLength5000]}/>
                </div>

                <div>
                    <Button>Send</Button>
                </div>
            </form>
        </div>
    )
}
export default reduxForm<FormDataType>({form: 'message'})(MessageForm)