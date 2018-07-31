import React, { Component } from 'react';
import { UserCard } from '../../components/UserCard/UserCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class UserList extends Component {
  
  makeUserCard = () => {
    return this.props.userList.map((user, index) => {
      return (
        <UserCard
         key={index}
         username={user.username}
        />
      )
    })
  }

  render() {
    return(
      <div className="user-list">
        {this.props.userList.length ?
          this.makeUserCard() : ''}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  userList: state.userList
})

export default connect(mapStateToProps)(UserList);

UserList.propTypes = {
  userList: PropTypes.array
}