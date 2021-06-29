import React from "react";
import Dialogs from "./Dialogs";
import {addMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux-store";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
        newMessageText: state.dialogsPage.newMessageBody,
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect)(Dialogs)
