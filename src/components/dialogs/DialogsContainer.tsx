import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {addMessageAC} from "../../redux/dialogs-reducer";

let mapStateToProps = (state: RootState) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {addMessageAC}), withAuthRedirect)(Dialogs)
