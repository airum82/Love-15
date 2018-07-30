import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CourtCard } from '../../components/CourtCard/CourtCard';
import { fetchCourts, makeFavoritesList } from '../../actions';
import { db } from '../../firebase';
import { withRouter } from 'react-router-dom'
import './CourtsContainer.css';

export class CourtsContainer extends Component {

  makeCourts = (courts) => {
    return courts.map((court, index) => {
      return (
        <CourtCard
          name={court.name}
          location={court.location}
          key={index}
          id={index}
          addFavoriteCourt={db.addFavoriteCourt}
          removeFromFavorites={db.removeFavoriteFromList}
          account={this.props.account}
          isFavorite={this.isFavorite}
          favorites={this.props.favorites}
          handleFavorite={this.props.handleFavorite}
          db={db}
        />
      )
    })
  }

  updateReduxFavorites = (court) => {
    if(this.isFavorite(court.name)) {
      return this.props.favorites
        .filter(favorite => favorite.name !== court.name);
    } else {
      return [...this.props.favorites, court];
    }
  }

  isFavorite = (name) => {
    return this.props.favorites
      .find(court => court.name === name)
  }

  render() {
    console.log(this.props.location)
    if(this.props.closeCourts.length && this.props.location.pathname === '/') {
      return (
        <div className="courts-container">
          {this.makeCourts(this.props.closeCourts)}
        </div>
      )
    } else if(this.props.location.pathname === '/favorites') {
        return (
          <div className="courts-container">
            {this.makeCourts(this.props.favorites)}
          </div>
        )
    } else {
      return (
        <div className="courts-container">
        </div>
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  closeCourts: state.closeCourts,
  account: state.account,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  handleSubmitCourts: (courts) => dispatch(fetchCourts(courts)),
  handleFavorite : courts => dispatch(makeFavoritesList(courts))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CourtsContainer))

CourtsContainer.propTypes = {
  closeCourts: PropTypes.array,
  handleSubmitCourts: PropTypes.func
}

