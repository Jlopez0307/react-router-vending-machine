import React from 'react';
import {BrowserRouter, Route ,NavLink, Link} from 'react-router-dom'

import Navbar from './Navbar'
import PokeBall from './PokeBall';
import Potion from './Potion';
import SuperPotion from './SuperPotion';

import '../styles/VendingMachine.css'

const VendingMachine = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <div className="VendingMachine">
            
                <Route exact path="/">
                    <div className="VendingMachine-choices">
                        <h1>Choose a drink!</h1>
                        <Link exact to="/pokeball">Poke-Ball</Link>
                        <Link exact to="/Potion">Potion</Link>
                        <Link exact to="/super-potion">Super Potion</Link>
                    </div>
                </Route>


                <Route exact path="/pokeball">
                    <PokeBall className="VendingMachine-item"/>
                </Route>


                <Route exact path="/potion">
                    <Potion className="VendingMachine-item"/>
                </Route>


                <Route exact path="/super-potion">
                    <SuperPotion className="VendingMachine-item"/>
                </Route>
                
            
        </div>
        </BrowserRouter>
    )
};

export default VendingMachine;