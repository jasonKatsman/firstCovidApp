import React from 'react'
import './BriefStats.scss'
import {useSelector} from "react-redux";

const BriefStats = ({className}) => {
    const selector = useSelector(state => state.globalReducer)
    const data = selector.world
    const isLoading = selector.isLoading
    const error = selector.error

    const setData = (msg) => {
        if (error) {
            return 'Error'
        }
        if (isLoading) {
            return 'Loading...'
        }
        return msg
    }
    return (<div className={`${className} outerBorder`}>
        <h3 className={'containerTitle'}>Worldwide</h3>
        <p className={'containerUpdated'}>-</p>
        <div className={'infoContainer'}>
            <h6 className={'containerSubTitle'}>TOTAL CASES</h6>
            <p className={'containerStats cases'}>{setData(data.TotalConfirmed)}</p>

        </div>
        <div className={'infoContainer'}>
            <h6 className={'containerSubTitle'}>RECENT CASES</h6>
            <p className={'containerStats active'}>{setData(data.NewConfirmed)}</p>
        </div>
        <div className={'infoContainer'}>
            <h6 className={'containerSubTitle'}>TOTAL DEATHS</h6>
            <p className={'containerStats dead'}>{setData(data.TotalDeaths)}</p>
        </div>
        <div className={'infoContainer'}>
            <h6 className={'containerSubTitle '}>RECENT DEATHS</h6>
            <p className={'containerStats critical'}>{setData(data.NewDeaths)}</p>
        </div>


        <div className={'infoContainer'}>
            <h6 className={'containerSubTitle'}>RECOVERED</h6>
            <p className={'containerStats recovered'}>{setData(data.TotalRecovered)}</p>
        </div>

    </div>)

}

export default BriefStats