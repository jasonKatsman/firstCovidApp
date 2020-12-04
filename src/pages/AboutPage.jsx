import {React, useEffect} from 'react'
import './AboutPage.scss'

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={'AboutPage'}>
            <div className={'AboutContainer'}>
                {/*<h1>Coronavirus disease 2019*/}
                {/*    (COVID-19)</h1>*/}
                <div className={'textContainer green fast'}>
                    <h3>THIS WEBSITE IS MADE BY JASON KATSOUTAS</h3>
                </div>
                <div className={'textContainer blue normal'}>
                    <h3>TECHNOLOGY USED TO MAKE THIS PAGE: ReactJS</h3>
                </div>
                <div className={'textContainer orange slow'}>
                    <h3>APIS CONSUMED</h3>
                    <a href={'https://api.covid19api.com'} target={'_blank'} rel="noreferrer"><h4>https://api.covid19api.com
                    </h4></a>

                </div>
                <div className={'textContainer yellow superSlow'}>
                    <h3>RSS NEWS CONSUMED</h3>
                    <a href={'https://www.who.int/feeds/entity/csr/don/en/rss.xml'} target={'_blank'} rel="noreferrer"><h4>https://www.who.int/feeds/entity/csr/don/en/rss.xml</h4></a>

                </div>

            </div>
        </div>
    );
}

export default AboutPage;
