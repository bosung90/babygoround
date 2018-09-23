import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import UserSearch from './UserSearch';
import Inventory from './Inventory';

class Controller extends Component {
    render() {
        return(
            <div>
                <UserSearch/>
                <Inventory/>
            </div>
        )
    }
}

export default Controller;