import React from 'react'
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Sphere,Graticule
} from "react-simple-maps";
import './MapChart.scss'
import {useMedia} from "react-media";
import {useSelector} from "react-redux";
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({setToolTip ,setDeaths,setConfirmed}) => {
    const isSmallScreen = useMedia({query: "(max-width:650px"})
    const selector = useSelector(state => state.globalReducer)
    const data = selector.countries
    return (<ComposableMap projection="geoEqualEarth" data-tip=""  projectionConfig={isSmallScreen?{scale: 200}:{scale: 230}} className={'mapChart'}>

            <ZoomableGroup  zoom={1} maxZoom={3}  >
                <Sphere stroke="#DDD" />
                <Graticule stroke="#DDD" />
                <Geographies geography={geoUrl} >
                    {({geographies}) =>
                        geographies.map(geo => <Geography className={'country'} onMouseEnter={()=>{
                            const {NAME_LONG,NAME} =geo.properties
                            let country=data.find((country)=>{return country.Country.toLowerCase().includes(NAME_LONG.toLowerCase()) || country.Country.toLowerCase().includes(NAME.toLowerCase()) })
                            try{
                                setToolTip(NAME_LONG)
                                setConfirmed('Cases: '+country.TotalConfirmed)
                                setDeaths('Deaths: '+country.TotalDeaths)
                            }catch  {
                                setToolTip(`${NAME_LONG}`)
                                setDeaths('Deaths: no data')
                                setConfirmed('Cases: no data')
                            }
                        }
                        } onMouseLeave={()=>{setToolTip('')
                            setDeaths('')
                            setConfirmed('')}}    key={geo.rsmKey} geography={geo}/>)
                    }</Geographies>
            </ZoomableGroup>
        </ComposableMap>
    );
}

export default MapChart;
