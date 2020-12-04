import {React, useEffect} from 'react'
import './ExtendedInfoPage.scss'
import GraphStats from "../components/GraphStats";
import CountryData from "../components/CountryData";
import {useDispatch, useSelector} from "react-redux";
import {getCountryDataThunk} from "../redux/Thunks/countryThunk";

const ExtendedInfoPage = ({...props}) => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.countryReducer.countryData)
    const country = props.match.params.country.substring(1).toString().toLowerCase()

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getCountryDataThunk(country))
    }, [])
    return (
        <div className={'InfoPage'}>
            <div className={'InfoPageContainer'}>
                <CountryData className={'CountryData'} data={''} country={country}/>
                <GraphStats className={'InfoGraph'} data={selector} name={props.match.params.country.substring(1)}
                            color={'rgba(31, 209, 40, .6)'}/>
                <GraphStats data={selector} name={props.match.params.country.substring(1)} type={'deaths'}
                            color={'rgba(202, 24, 24, .6)'}/>
            </div>
        </div>
    );
}

export default ExtendedInfoPage;
