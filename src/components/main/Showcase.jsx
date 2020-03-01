import React, { Component } from 'react'
import MoviesContainer      from './movie/MoviesContainer';
import { Loading }          from './Loading';
import { connect }          from 'react-redux';

class Showcase extends Component {
    render() {
        return (
            <div className="wrapper__results">
                { this.props.loading ? <Loading/> : <MoviesContainer/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading : state.movies.loading
})

export default connect(mapStateToProps)(Showcase);