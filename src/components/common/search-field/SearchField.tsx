import React from "react";
import {useFormik} from 'formik'
import s from './SearchField.module.css'
import {Button} from "../../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {setIsFollowed, setNameSearch} from "../../../redux/users-reducer";
import {RootState} from "../../../redux/redux-store";

export const SearchUsersField = () => {

    const dispatch = useDispatch()
    const {isFollowed} = useSelector((state: RootState) => state.usersPage)

    const formik = useFormik({
        initialValues: {
            nameSearch: '',
        },
        onSubmit: values => {
            dispatch(setNameSearch(values.nameSearch))
        },
    });

    const showAllHandler = () => {
        dispatch(setNameSearch(''))
        dispatch(setIsFollowed(null))

    }

    return (
        <div className={s.searchContainer}>

            <div className={s.followed}>
                <span className={s.followedButton}>
                    <Button disabled={isFollowed === true}
                            onClick={() => dispatch(setIsFollowed(true))}>followed</Button></span>
                <span className={s.notFollowedButton}>
                    <Button disabled={isFollowed === false}
                            onClick={() => dispatch(setIsFollowed(false))}>not followed</Button></span>
            </div>

            <div>
                <form onSubmit={formik.handleSubmit}>
                    <input
                        id="nameSearch"
                        name="nameSearch"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.nameSearch}
                    />
                    <Button>Search</Button>
                </form>
                <Button onClick={showAllHandler}>Show all</Button>
            </div>
        </div>
    )
}