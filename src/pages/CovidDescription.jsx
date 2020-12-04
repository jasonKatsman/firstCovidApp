import {React,useEffect} from 'react'
import './CovidDescription.scss'

const CovidDescription = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={'CovPage'}>
            <div className={'CovPageContainer'}>
                <div className={'textContainer green fast'}>
                    <h3>WHAT IS COVID-19</h3>
                    <div className={'textImage'}>
                        <h4>Coronavirus disease 2019 (COVID-19) is a contagious disease caused by severe acute
                            respiratory
                            syndrome coronavirus 2 (SARS-CoV-2). The first case was identified in Wuhan, China in
                            December
                            2019</h4>
                    </div>
                </div>
                <div className={'textContainer red normal'}>
                    <h3>SIGNS AND SYMPTOMS OF COVID-19</h3>
                    <div className={'textImage'}>
                        <h4>Symptoms of COVID-19 are variable, but usually include fever and a cough.[20][21] People
                            with
                            the same infection may have different symptoms, and their symptoms may change over time. For
                            example, one person may have a high fever, a cough, and fatigue, and another person may have
                            a
                            low fever at the start of the disease and develop difficulty breathing a week later.
                            However, in
                            people without prior ears, nose, and throat (ENT) disorders, loss of taste combined with
                            loss of
                            smell is associated with COVID-19 with a specificity of 95%</h4>
                        <h4>As is common with infections, there is a delay, known as the incubation period, between the
                            moment a person first becomes infected and the appearance of the first symptoms. The median
                            incubation period for COVID-19 is four to five days.[23] Most symptomatic people experience
                            symptoms within two to seven days after exposure, and almost all symptomatic people will
                            experience one or more symptoms before day twelve.</h4>

                    </div>
                </div>

                <div className={'textContainer orange slow'}>
                    <h3>CAUSE</h3>
                    <div className={'textImage'}>
                        <h4>COVID-19 is caused by infection with the severe acute respiratory syndrome coronavirus 2
                            (SARS-CoV-2) virus strain.
                        </h4>

                    </div>
                </div>

                <div className={'textContainer yellow superSlow'}>
                    <h3>TRANSMISSION</h3>
                    <div className={'textImage'}>
                        <h4>COVID-19 spreads from person to person mainly through the respiratory route after an
                            infected
                            person coughs, sneezes, sings, talks or breathes. A new infection occurs when
                            virus-containing
                            particles exhaled by an infected person, either respiratory droplets or aerosols, get into
                            the
                            mouth, nose, or eyes of other people who are in close contact with the infected
                            person. </h4>
                        <h4>Social distancing and the wearing of cloth face masks, surgical masks, respirators, or other
                            face coverings are controls for droplet transmission. Transmission may be decreased indoors
                            with
                            well maintained heating and ventilation systems to maintain good air circulation and
                            increase
                            the use of outdoor air.</h4>
                    </div>
                </div>
                <div className={'textContainer blue superSlow'}>
                    <h3>DIAGNOSIS</h3>
                    <div className={'textImage'}>
                        <h4>The standard method of testing is real-time reverse transcription polymerase chain reaction
                            (rRT-PCR).The test is typically done on respiratory samples obtained by a nasopharyngeal
                            swab; however, a nasal swab or sputum sample may also be used.Results are generally
                            available within a few hours to two days.Blood tests can be used, but these require two
                            blood samples taken two weeks apart, and the results have little immediate value. </h4>
                        <h4>Chinese scientists were able to isolate a strain of the coronavirus and publish the genetic
                            sequence so laboratories across the world could independently develop polymerase chain
                            reaction (PCR) tests to detect infection by the virus.</h4>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CovidDescription;
