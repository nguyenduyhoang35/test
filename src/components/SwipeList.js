import React, {Component} from 'react';
import SwipeItem from './SwipeItem'
import {userServices} from "../services";

class SwipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentWillMount() {
        let data = await userServices.get();
        this.setState({
            data: data
        })
    }


    async setNewItem(userSave, key) {
        let userLike = [];
        if (key === 'like') {
            userLike.push(userSave);
            localStorage.setItem('userLike', userSave);
            let data = await userServices.get();
            this.setState({
                data: data
            }, () => {
                const data = localStorage.getItem('userLike');
                console.log(data)
            })
        }
    }


    render() {
        return (
            <React.Fragment>
                {this.state.data.map(el => {
                        const user = el.user;
                        return (
                            <SwipeItem key={`swipeItem-${user.username}`}
                                       onRemoval={(key) => this.setNewItem(user, key)}>
                                <div className="cardheader">
                                </div>
                                <div className="avatar">
                                    <div className="wrap-image">
                                        <img alt="user"
                                             src={user.picture}/>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="desc">My address is</div>
                                    <div className="title">
                                        <div style={{textTransform: 'capitalize'}}>{user.location.street}</div>
                                    </div>
                                </div>
                                <div className="bottom d-flex justify-content-around">
                                    <i className="fas fa-user-circle"/>
                                    <i className="far fa-list-alt"/>
                                    <i className="fas fa-map-marked-alt"/>
                                    <i className="fas fa-phone"/>
                                    <i className="fas fa-lock"/>
                                </div>
                            </SwipeItem>)
                    }
                )}
            </React.Fragment>
        );
    }
}

export default SwipeList