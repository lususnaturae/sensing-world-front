/**
 * Created by marco on 17.6.2016.
 */
import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {

    render() {
        return (
            <div>
                <Header />
                    {this.props.children}
            </div>
        );
    }
}
