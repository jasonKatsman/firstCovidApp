import {React, useRef, useEffect} from 'react'
import BriefStats from "../components/BriefStats";
import MainStats from "../components/MainStats";
import './HomePage.scss'
import {useMedia} from "react-media";
import search from '../images/search-outline.svg'

import {useSelector} from "react-redux";


const HomePage = () => {
    const isSmallScreen = useMedia({query: "(max-width:645px"})
    const focusRef = useRef()
    const selector = useSelector(state => state.globalReducer)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const onSearchRef = () => {
        console.log(focusRef.current.focus())
    }
    return (
        <div className="homePage">

            <div className={'homeContainer'}>
                {isSmallScreen ?
                    <div onClick={() => onSearchRef()} className={'scrollButton'}><span>Scroll to Search</span><img
                        src={search} alt={''}/></div> : null}
                <BriefStats data={selector.world}
                            className={isSmallScreen ? 'briefContainer mobileBrief' : 'briefContainer'}/>
                <MainStats myref={focusRef} data={selector.countries}
                           className={isSmallScreen ? 'mainContainer mobileMain' : 'mainContainer'}/>
            </div>
        </div>
    );
}

export default HomePage;
