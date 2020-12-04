import {useState, useRef, useEffect} from 'react';
import './NavigationHeader.scss'
import logo from '../images/coronavirus-logo.png'

import menu from '../images/menu-outline.svg'
import close from '../images/close-outline.svg'
import home from '../images/home-outline.svg'
import world from '../images/earth-outline.svg'
import alert from '../images/alert-circle-outline.svg'
import book from '../images/book-outline.svg'

import {useMedia} from 'react-media';
import {useHistory} from "react-router";

const NavigationHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory()
    const isSmallScreen = useMedia({query: "(max-width:650px"})
    const ref = useRef();
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)

    }, [ref])
    const closeMenu = () => {
        setIsOpen(false)
    }
    return (
        <>
            <header ref={ref} className={'navigationHeader'}>

                <img onClick={() => {
                    history.push('/home')
                    closeMenu()
                }} className={'navLogo'} src={logo} alt={'logo'}/>
                <h2 onClick={() => {
                    history.push('/home')
                    closeMenu()
                }} className={'navLogoText'}>JCOVID</h2>

                {isSmallScreen ?
                    <div className={'smallScreen'}>
                        <div className={isOpen ? 'menuOpen' : 'menuClosed'}>
                            {/*<h4 className={ 'navButtons' }>HOME</h4>*/}
                            {/*<h4 className={ 'navButtons' }>WORLDMAP</h4>*/}
                            {/*<h4 className={'navButtons' }>ABOUT</h4>*/}
                            <div className={'navButtons'} onClick={() => {
                                history.push('/home')
                                closeMenu()
                            }}>
                                <img className={'image'} src={home} alt={'ln'}/><h4>HOME</h4>
                            </div>
                            <div className={'navButtons'} onClick={() => {
                                history.push('/map')
                                closeMenu()
                            }}>
                                <img className={'image'} src={world} alt={'ln'}/><h4>WORLDMAP</h4>
                            </div>
                            <div className={'navButtons'} onClick={() => {
                                history.push('/wiki')
                                closeMenu()
                            }}>
                                <img className={'image'} src={book} alt={'ln'}/><h4>WIKI</h4>
                            </div>
                            <div className={'navButtons'} onClick={() => {
                                history.push('/about')
                                closeMenu()
                            }}>
                                <img className={'image'} src={alert} alt={'ln'}/><h4>ABOUT</h4>
                            </div>

                        </div>
                    </div> :
                    <div className={'bigScreen'}>
                        <h4 className={'navButtons'} onClick={() => {
                            history.push('/home')
                            closeMenu()
                        }}>HOME</h4>
                        <h4 className={'navButtons'} onClick={() => {
                            history.push('/map')
                            closeMenu()
                        }}>WORLDMAP</h4>
                        <h4 className={'navButtons'} onClick={() => {
                            history.push('/wiki')
                            closeMenu()
                        }}>WIKI</h4>
                        <h4 className={'navButtons'} onClick={() => {
                            history.push('/about')
                            closeMenu()
                        }}>ABOUT</h4>

                        <div className={'navSpace'}/>
                    </div>
                }

                <div className={'navSpace'}/>
                {/*<div className={'navButtons right'}>*/}
                {/*    <img className={'mediumSizeImage'} src={ln} alt={'ln'}/>{isSmallScreen ? null : <h5>LINKEDIN</h5>}*/}
                {/*</div>*/}
                <img className={isSmallScreen ? 'mediumSizeImage' : 'isClosed'} src={!isOpen ? menu : close}
                     onClick={() => setIsOpen(!isOpen)}
                     alt={'logo'}/>
            </header>
        </>
    )
}

export default NavigationHeader