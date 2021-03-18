import React from 'react';
import Tasks from '../reactDashboard/Tasks/Tasks';
import Main from './Main';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Clients from './Clients/Client';

const Routing = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" component={Main} />
                    <Route path="/tasks" exact component={Tasks} />
                    <Route path="/clients" component={Clients} />
                </Switch>
            </Router>
        </>
    );
};

export default Routing;