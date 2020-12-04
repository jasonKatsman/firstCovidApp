import {GET_GLOBAL_DATA_FAILED, GET_GLOBAL_DATA_LOADING, GET_GLOBAL_DATA_SUCCESS} from "../Actions/globalActions";

const initialState = {
    isLoading: false,
    world: {},
    countries: [],
    error: ''
}


const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GLOBAL_DATA_FAILED:
            return {
                isLoading: false,
                world: {},
                countries: [],
                error: action.payload
            }
        case GET_GLOBAL_DATA_SUCCESS:
            return {
                isLoading: false,
                world: action.payload.Global,
                countries: action.payload.Countries,
                error: ''
            }
        case GET_GLOBAL_DATA_LOADING:
            return {
                isLoading: true,
                world: {},
                countries: [],
                error: ''
            }

        default:
            return state

    }
}

export default globalReducer