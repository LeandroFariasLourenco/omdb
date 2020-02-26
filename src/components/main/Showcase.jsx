import React, { Component } from 'react'
import Movies               from './Movies';
import { Loading }          from './Loading';
import { connect }          from 'react-redux';

class Showcase extends Component {
    render() {
        const { loading } = this.props;
        console.log(loading);
        return (
            <div className="wrapper__results">
                { loading ? <Loading/> : <Movies/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading : state.movies.loading
})

export default connect(mapStateToProps)(Showcase);