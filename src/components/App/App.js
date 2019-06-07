import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Switch, Route, Redirect} from "react-router-dom";
import WeatherList from "../weatherList/weatherList";
import NotFound from "../NotFound/NotFound";

function App() {
    return (
        <MainLayout>
            <Switch>
                <Route exact path={'/'} component={WeatherList}/>
                <Route path={'/not-found'} component={NotFound}/>
                <Redirect to={'/not-found'}/>
            </Switch>
        </MainLayout>
    );
}

export default App;
