import {React} from 'react'
import './CountryData.scss'
import {convertDate} from "../RequestAPI";
import {useSelector} from "react-redux";

const CountryData = ({className, country}) => {
    // data.Country
    // data.Active
    // data.Deaths
    // data.Confirmed
    // data.Recovered
    const selector = useSelector(state => state.countryReducer)
    const data = selector.countryBrief
    const isLoading = selector.isLoading
    const error = selector.error

    const setData = (msg) => {
        if (error) {
            return <p>Error loading data</p>
        }
        if (isLoading) {
            return <p>Loading...</p>
        }
        return <p>{msg}</p>
    }

    return (
        <div className={`${className} countryDataContainer`}>
            <div className={'countryDataHeader'}>
                <h1>{country}</h1>
                {setData(convertDate(data.Date))}
            </div>

            <div className={'countryDataInfo'}>
                <div className={'countryField cases'}>
                    <h2>cases</h2>
                    {setData(data.Confirmed)}
                </div>
                <div className={'countryField critical'}>
                    <h2>Active</h2>
                    {setData(data.Active)}
                </div>
                <div className={'countryField dead'}>
                    <h2>Deaths</h2>
                    {setData(data.Deaths)}
                </div>
                <div className={'countryField  recovered'}>
                    <h2>Recovered</h2>
                    {setData(data.Recovered)}
                </div>
            </div>
        </div>
    );
}

export default CountryData;
