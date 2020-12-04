import {React, useEffect} from 'react'
import './NewsFeed.scss'
import news from '../images/newspaper-outline.svg'

const NewsFeed = ({className,data}) => {
    useEffect(() => {

    }, [])

    const prepareNews = ()=> {

        try {
        return data.map((news, i) => {
            return <a key={i} href={news.link} target="_blank" rel="noreferrer">
                <label>{news.title}</label>
                <span>-{news.date}</span>
            </a>
        })
    }catch (e) {
            console.log(e)
        }
    }
    return (
        <div className={`${className} newsHolder`}>
            <div className={'feedLabel'}><img src={news} alt={'news'}/><h3>News</h3></div>
            <div className={'spinnerDivision'}>
                {prepareNews()}
            </div>
        </div>
    );
}

export default NewsFeed;

// <div className={`${className} newsHolder`}>
//     <div className={'carousel'}>
//         {data.map((news, i) => {
//             return <a key={i} href={news.link} target="_blank">
//                 <label>{news.title}</label>
//                 <span>{news.date}</span>
//             </a>
//         })}
//     </div>
//     <Slider dots rows={1}>
//         <div>
//             <h3>1</h3>
//         </div>
//         <div>
//             <h3>2</h3>
//         </div>
//         <div>
//             <h3>3</h3>
//         </div>
//         <div>
//             <h3>4</h3>
//         </div>
//         <div>
//             <h3>5</h3>
//         </div>
//     </Slider>
// </div>