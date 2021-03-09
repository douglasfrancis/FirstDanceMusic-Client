import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/home/Home';
import Search from './components/search/Search';
import Navbar from './components/misc/Navbar';

export default function Router() {
    return <BrowserRouter>
    <Navbar />
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
        <Route path="/search">
            <Search />
        </Route>
    </Switch>
    
    </BrowserRouter>
}
