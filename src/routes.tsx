import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./modules/header/Header";
import Dashboard from "./modules/dashboard/Dashboard";
import PatientsDatabase from "./modules/patientsDatabase/PatientsDatabase";
import ColleaguesDatabase from "./modules/colleaguesDatabase/ColleaguesDatabase";
import Pharmacy from "./modules/pharmacy/Pharmacy";
import Ward from "./modules/ward/Ward";
import Billing from "./modules/billing/Billing";
import News from "./modules/news/News";
import PageNotFound from "./modules/pageNotFound/PageNotFound";


const Routes = () => (
    <>
        <Header />
        <Switch>
            <Redirect from="/" exact={true} to="/dashboard" />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/patientsDatabase" component={PatientsDatabase} />
            <Route path="/colleaguesDatabase" component={ColleaguesDatabase} />
            <Route path="/pharmacy" component={Pharmacy} />
            <Route path="/ward" component={Ward} />
            <Route path="/billing" component={Billing} />
            <Route path="/news" component={News} />
            {/* <Route path="/login" component={Login} />
    <Route path="/personal-profile" component={PersonalProfile} /> */}
            {/* <Route
      path="/activities/:listName"
      render={props => <ActivitiesList key={props.match.params.listName} {...props} />}
    /> */}

            {/* If no Route matches, show PageNotFound component */}
            <Route component={PageNotFound} />
        </Switch>
    </>
);

export default Routes;