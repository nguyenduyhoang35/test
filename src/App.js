import React, {Component} from 'react';
import SwipeList from './components/SwipeList'
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className='wrap-page'>
                <div className="bg-top"/>
                <div className="bg-bottom">
                    <div className="row-card">
                        <SwipeList />
                    </div>
                </div>
            </div>
        );
    }
}
