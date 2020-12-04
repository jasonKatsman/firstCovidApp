import {React} from 'react'
import './GraphStats.scss'
import {CanvasJSChart} from "canvasjs-react-charts";
import {convertDate} from "../RequestAPI";
import {useSelector} from "react-redux";

const GraphStats = ({type = 'cases', color, name, className}) => {
    const selector = useSelector(state => state.countryReducer)
    const data = selector.countryData
    const isLoading = selector.isLoading
    const error = selector.error

    const transformData = (type) => {
        switch (type) {
            case 'cases':
                return data.map((dt) => {
                    return {
                        x: new Date(convertDate(dt.Date)),
                        y: dt.Confirmed

                    }
                })
            case 'deaths':
                return data.map((dt) => {
                    return {
                        x: new Date(convertDate(dt.Date)),
                        y: dt.Deaths
                    }
                })
            default:
                return data.map((dt) => {
                    return {
                        x: new Date(convertDate(dt.Date)),
                        y: dt.Confirmed

                    }
                })
        }
    }
    const options = {
        backgroundColor: 'rgba(29, 29, 29, 0.8)',
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark1", //"light1", "dark1", "dark2"
        title: {
            text: `${name} ${type} `
        },
        axisY: {
            includeZero: true
        },
        data: [{
            color: color,
            type: "area", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#fffff",
            indexLabelPlacement: "outside",
            dataPoints: transformData(type)
        }]

    }

    const setData = () => {
        if (error) {
            return <h3 className={'loading'}>Error loading statistics</h3>
        }
        if (isLoading) {
            return <h3 className={'loading'}>Loading...</h3>
        }
        return <CanvasJSChart options={options}/>
    }

    return (
        <div className={`${className} canvas`}>
            {/*{!isLoading?<h3 className={'loading'}>Loading...</h3>:<CanvasJSChart options={options}/>}*/}
            {setData()}
        </div>
    );
}

export default GraphStats;
