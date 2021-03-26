import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/home/Home';
import Search from './components/search/Search';
import FilteredFavourites from './components/search/FilteredFavourites';
import Navbar from './components/misc/Navbar';
import BookingForm from './components/search/BookingForm';
import BigProfile from './components/search/BigProfile';

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
        <Route path="/favourites">
            <FilteredFavourites />
        </Route>
        <Route path="/bookings" component={BookingForm}>
            <BookingForm />
        </Route>
        <Route path="/:id" component={BigProfile}>
            <BigProfile />
        </Route>
        
    </Switch>
    
    </BrowserRouter>
}
