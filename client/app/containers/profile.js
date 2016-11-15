import React, { Component } from 'react';
import { connect as Connect } from 'react-redux';

class Profile extends Component {
    render() {
        let user = this.props.user;
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>{user.name}</h2>
                <img src={user.avatar_url} alt={user.name} className="addpetmargin center-block img-circle"/>
            </div>
        )
    }
}

export default Connect(({user}) => ({user}))(Profile)
