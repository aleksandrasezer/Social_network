import Dialogs from "./Dialogs";
import {addMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux-store";

let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addNewMessage: () => dispatch(addMessageAC()),
        onMessageChangeHandler: (text: string) => dispatch(updateNewMessageBodyAC(text)),
        onTextClickHandler: () => dispatch(updateNewMessageBodyAC(''))
    }
}
let mapStateToProps = (state: RootState) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageBody
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
