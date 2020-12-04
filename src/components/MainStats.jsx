import {React, useState} from 'react'
import './MainStats.scss'
import {useMedia} from "react-media";
import {useHistory} from "react-router";
import {useSelector} from "react-redux";


const MainStats = ({myref, className}) => {
    const selector = useSelector(state => state.globalReducer)

    const history = useHistory();
    const isSmallScreen = useMedia({query: "(max-width:780px"})
    const [orderBy, setOrderBy] = useState('country')
    const [search, setSearch] = useState('')
    const [ascending, setAscending] = useState(false)

    const data = selector.countries
    const isLoading = selector.isLoading
    const error = selector.error

    const getRows = () => {
        // try {
            switch (orderBy) {
                case "Country":
                    if (ascending) {
                        data.sort((a, b) => b.Country.toLowerCase().localeCompare(a.Country.toLowerCase()))
                    } else {
                        data.sort((a, b) => a.Country.toLowerCase().localeCompare(b.Country.toLowerCase()))

                    }
                    break;
                case "Confirmed":
                    if (ascending) {
                        data.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed)
                    } else {
                        data.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
                    }
                    break;
                case "Dead":
                    if (ascending) {
                        data.sort((a, b) => b.TotalDeaths - a.TotalDeaths)
                    } else {
                        data.sort((a, b) => a.TotalDeaths - b.TotalDeaths)
                    }
                    break;
                case "Recovered":
                    if (ascending) {
                        data.sort((a, b) => b.TotalRecovered - a.TotalRecovered)
                    } else {
                        data.sort((a, b) => a.TotalRecovered - b.TotalRecovered)
                    }
                    break;

                case "Tests":
                    if (ascending) {
                        data.sort((a, b) => b.NewDeaths - a.NewDeaths)
                    } else {
                        data.sort((a, b) => a.NewDeaths - b.NewDeaths)
                    }
                    break;
                case "Population":
                    if (ascending) {
                        data.sort((a, b) => b.NewRecovered - a.NewRecovered)
                    } else {
                        data.sort((a, b) => a.NewRecovered - b.NewRecovered)
                    }
                    break;
                default:
                    data.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
                    break;
            }
            return data.filter((a) => {
                return a.Country.toLowerCase().includes(search.toLowerCase())
            }).map((row, i) => {
                return (
                    <tr className={'dataRow'} key={i} onClick={() => history.push(`/info/:${row.Country}`)}>
                        <td className={'country'}>{row.Country}</td>
                        <td className={'cases'}>{row.TotalConfirmed}</td>
                        <td className={'dead'}>{row.TotalDeaths}</td>
                        <td className={'recovered'}>{row.TotalRecovered}</td>
                        {isSmallScreen ? null : <td className={'critical'}>
                            {row.NewDeaths}
                        </td>}
                        {isSmallScreen ? null : <td className={'population'}>
                            {row.NewRecovered}
                        </td>}
                    </tr>)
            })
        //
        // } catch (e) {
        //     console.log(e)
        // }
    }
    const setData = () => {
        if (error) {
            return <tr><td className={'dead'}><h3>ERROR</h3></td></tr>
        }
        if (isLoading) {
            return <tr><td className={'recovered'}><h3>LOADING...</h3></td></tr>
        }
        return getRows()
    }

    return (
        <div className={`${className} mainStatsContainer`}>
            <div className={'outerContainer'}>
                <input ref={myref} className={'searchCountry'} type={'text'} onFocus={(e) => e.target.placeholder = ""}
                       onBlur={(e) => e.target.placeholder = "Search Country"} placeholder={'Search Country'}
                       onChange={(e) => {
                           setSearch(e.target.value)
                       }}/>
            </div>
            <div className={'innerContainer'}>
                <table className={'mainStatTable'}>
                    <thead>
                    <tr className={'headerRow'}>
                        <th onClick={() => {
                            setAscending(!ascending)
                            setOrderBy('Country')
                        }}>Country
                        </th>
                        <th onClick={() => {
                            setAscending(!ascending)
                            setOrderBy('Confirmed')
                        }}>Confirmed
                        </th>
                        <th onClick={() => {
                            setAscending(!ascending)
                            setOrderBy('Dead')
                        }}>Dead
                        </th>
                        <th onClick={() => {
                            setAscending(!ascending)
                            setOrderBy('Recovered')
                        }}>Recovered
                        </th>
                        {isSmallScreen ? null : <th onClick={() => {
                            setAscending(!ascending)
                            setOrderBy('Tests')
                        }}>New Deaths</th>}
                        {isSmallScreen ? null : <th onClick={() => {
                            setAscending(!ascending)
                            setOrderBy('Population')
                        }}>New Recovered</th>}
                    </tr>
                    </thead>
                    <tbody>
                    {setData()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MainStats