export const GET_COUNTRY_DATA_LOADING="GET_COUNTRY_DATA_LOADING"
export const GET_COUNTRY_DATA_SUCCESS="GET_COUNTRY_DATA_SUCCESS"
export const GET_COUNTRY_DATA_FAILED="GET_COUNTRY_DATA_FAILED"

export const getCountryData_loading=()=>{
    return {
        type:GET_COUNTRY_DATA_LOADING
    }
}

export const getCountryData_success=(data)=>{
    return {
        type:GET_COUNTRY_DATA_SUCCESS,
        payload:data
    }
}
export const getCountryData_failed=(err)=>{
    return {
        type:GET_COUNTRY_DATA_FAILED,
        payload:err
    }
}