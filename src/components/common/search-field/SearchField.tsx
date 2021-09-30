import React from "react";
import {useFormik} from 'formik'
import s from './SearchField.module.css'
import {Button} from "../../Button/Button";
import {useDispatch} from "react-redux";
import {setNameSearch} from "../../../redux/users-reducer";

export const SearchUsersField = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            nameSearch: '',
        },
        onSubmit: values => {
            dispatch(setNameSearch(values.nameSearch))
        },
    });
    return (
        <div className={s.searchContainer}>
            <form onSubmit={formik.handleSubmit} >
                <input
                    id="nameSearch"
                    name="nameSearch"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.nameSearch}
                />
                <Button>Search</Button>
            </form>
            <Button onClick={() => dispatch(setNameSearch(''))}>Show all</Button>
        </div>
    )
}