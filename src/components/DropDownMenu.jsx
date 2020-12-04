import {React, useEffect, useRef, useState} from 'react'
import './DropDownMenu.scss'
import arrow from '../images/arrow-down-outline.svg'

const DropDownMenu = () => {
    const [dropOpen, setDropOpen] = useState(false)
    const menuRef = useRef()
    useEffect(() => {
        const dropMenuStatus = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setDropOpen(false)
            }
        }
        document.addEventListener('mousedown', dropMenuStatus)
    }, [menuRef])

    return (
        <div className={'dropDownContainer'} ref={menuRef}>
            <div className={'dropButton'} onClick={() => {
                setDropOpen(!dropOpen)
            }}>
                <p>WORLD</p><img className={dropOpen ? 'arrow-up' : 'arrow-down'} src={arrow} alt={'*'}/>
            </div>
            {dropOpen ?
                <div className={'dropList'}>
                    <ul>
                        <li>WORLD</li>
                        <li>EUROPE</li>
                        <li>N. AMERICA</li>
                        <li>S. AMERICA</li>
                        <li>AFRICA</li>
                        <li>ASIA</li>
                        <li>OCEANIA</li>
                    </ul>
                </div>
                : null}
        </div>
    )
}

export default DropDownMenu