export const GET_GLOBAL_DATA_LOADING='GET_GLOBAL_DATA_LOADING'
export const GET_GLOBAL_DATA_SUCCESS='GET_GLOBAL_DATA_SUCCESS'
export const GET_GLOBAL_DATA_FAILED='GET_GLOBAL_DATA_FAILED'

export const getGlobalData_loading=()=>{
    return {
        type:GET_GLOBAL_DATA_LOADING
    }
}

export const getGlobalData_success=(data)=>{
    return {
        type:GET_GLOBAL_DATA_SUCCESS,
        payload:data
    }
}

export const getGlobalData_failed=(err)=>{
    return {
        type:GET_GLOBAL_DATA_FAILED,
        payload:err
    }
}