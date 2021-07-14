import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux-store";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {}
}
let mapStateToProps = (state: RootState) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageBody,
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect)(Dialogs)
