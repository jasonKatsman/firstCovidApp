import axios from "axios";

const Parser = require('rss-parser');
const parser = new Parser()
export function convertDate(str) {
    new Date().getTime()
    let date = new Date(str)
    let mnth = ("0" + (date.getMonth() + 1)).slice(-2)
    let day = ("0" + date.getDate()).slice(-2)
    return [date.getFullYear(), mnth, day].join("-")
}

export const getAllCountryData = () => {
    return fetch('https://api.covid19api.com/summary')
        .then(res => res.json()).then(json => json).catch(err => console.log(err))
}

export const getCountryData = (country) => {
    return axios.get(`https://api.covid19api.com/total/dayone/country/${country}`)
        .then(res => res.data)
        .catch(err => console.log(err))
    // return fetch(`https://api.covid19api.com/total/dayone/country/${country}`)
    //     .then(res => res.json()).then(json => json).catch(err => console.log(err))
}



export const getNewsFeed = () => {
    return parser.parseURL(`https://www.who.int/feeds/entity/csr/don/en/rss.xml`)
        .then(feed => feed.items.map((item) => {
            return {title: item.title, date: convertDate(item.isoDate), link: item.link}
        })).catch((e)=>console.log(e))

    // return fetch(`https://cors-anywhere.herokuapp.com/https://www.who.int/rss-feeds/news-english.xml`)
    //     .then(res => res.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    //     .then(data => console.log(data))
}

//https://www.ecdc.europa.eu/en/taxonomy/term/2942/feed
//https://news.google.com/rss/search?q=covid-19
//https://news.google.com/rss/search?q=covid-19&hl=el&sort=date&num=100&gl=GR&ceid=GR:el
