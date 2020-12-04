import './App.css';
import {
    BrowserRouter as Router, Redirect,

    Route, Switch,

} from "react-router-dom";
import NavigationHeader from "./components/NavigationHeader";
import {React, useState, useEffect} from 'react'

import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import AboutPage from "./pages/AboutPage";
import ExtendedInfoPage from "./pages/ExtendedInfoPage";
import NewsFeed from "./components/NewsFeed";
import {getNewsFeed} from "./RequestAPI";
import CovidDescription from "./pages/CovidDescription";
import {getGlobalDataThunk} from "./redux/Thunks/globalThunk";
import {useDispatch} from "react-redux";

function App() {
    const [newsData, setNewsData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getGlobalDataThunk())
        getNewsFeed().then((data) => {
            setNewsData(data)
        })
    }, [])

    return (

        <div className="App">

            <Router onUpdate={() => window.scrollTo(0, 0)}>
                <header>
                    <NavigationHeader/>
                </header>
                <NewsFeed className={'newsFeed'}
                          data={newsData}
                />
                <Switch>
                    <Route component={HomePage} path={'/home'} exact={true}/>
                    <Route component={MapPage} path={'/map'} exact={true}/>
                    <Route component={CovidDescription} path={'/wiki'} exact={true}/>
                    <Route component={AboutPage} path={'/about'} exact={true}/>
                    <Route component={ExtendedInfoPage} path={'/info/:country'} exact={true}/>

                    <Route exact path={'/'}><Redirect to={'/home'}/></Route>
                    <Route exact path={`*`}><Redirect to={'/home'}/></Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
