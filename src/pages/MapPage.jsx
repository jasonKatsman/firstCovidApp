import {React, useEffect, useState} from 'react'
import './MapPage.scss'
import MapChart from "../components/MapChart";
import ReactTooltip from "react-tooltip";
import {useSelector} from "react-redux";

const MapPage = () => {
    const [toolTip, setToolTip] = useState('')
    const [deaths, setDeaths] = useState('')
    const [confirmed, setConfirmed] = useState('')
    const data = useSelector(state => state.globalReducer.countries)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={'mapPage'}>

            <div className={'mapContainer'}>
                <MapChart setToolTip={setToolTip} data={data} setDeaths={setDeaths} setConfirmed={setConfirmed}/>
                <ReactTooltip className={'toolTip'}>
                    {toolTip ?
                        <div>
                            <h2>{toolTip}</h2>
                            <p className={'cases'}>{confirmed}</p>
                            <p className={'dead'}>{deaths}</p>
                        </div>
                        : null}
                </ReactTooltip>
            </div>
        </div>
    );
}

export default MapPage;
