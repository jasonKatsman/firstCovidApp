import axios from 'axios'

import {getCountryData_failed, getCountryData_loading, getCountryData_success} from "../Actions/countryActions";

export const getCountryDataThunk= (country) => dispatch => {
    dispatch(getCountryData_loading())
    axios.get(`https://api.covid19api.com/total/dayone/country/${country}`)
        .then(res => dispatch(getCountryData_success(res.data)))
        .catch(err => dispatch(getCountryData_failed(err.message)))
}

