import axios from "axios"
import {getGlobalData_failed, getGlobalData_loading, getGlobalData_success} from "../Actions/globalActions";


export const getGlobalDataThunk = () => dispatch => {
    console.log('imhere')
    dispatch(getGlobalData_loading())
    axios.get('https://api.covid19api.com/summary')
        .then(res => {dispatch(getGlobalData_success(res.data))
        console.log(res.data)})
        .catch(err => dispatch(getGlobalData_failed(err.message)))
}