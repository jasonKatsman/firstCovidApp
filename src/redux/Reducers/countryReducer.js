import {GET_COUNTRY_DATA_FAILED, GET_COUNTRY_DATA_LOADING, GET_COUNTRY_DATA_SUCCESS} from "../Actions/countryActions";

const initialState = {
    isLoading: false,
    countryData: [],
    countryBrief:{},
    error: ''
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRY_DATA_LOADING:
            return {
                isLoading: true,
                countryData: [],
                countryBrief:{},
                error: ''
            }
        case GET_COUNTRY_DATA_SUCCESS:
            return {
                isLoading: false,
                countryData: action.payload,
                countryBrief:action.payload[action.payload.length-1],
                error: ''
            }
        case GET_COUNTRY_DATA_FAILED:
            return {
                isLoading: false,
                countryData: [],
                countryBrief:{},
                error: action.payload
            }

        default:
            return state
    }
}

export default countryReducer