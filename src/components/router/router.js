import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from "../../pages/mainPage/mainPage";
import WontedPage from "../../pages/wontedPage/wontedPage";
import CategoryPage from "../../pages/categoryPage/categoryPage";
import CardPage from "../../pages/cartPage/cardPage";
import Header from "../header/header";

const RouterPages = () => {
    return (
        <Router>
            <Header/>
            <div className='container-fluid'>
                <Switch>
                    <Route exact path='/wanted-page/' component={WontedPage}/>
                    <Route exact path="/category/" component={CategoryPage}/>
                    <Route exact path='/card-page/' component={CardPage}/>
                    <Route exact path='/' component={MainPage}/>
                </Switch>
            </div>
        </Router>
    )
}

export default RouterPages