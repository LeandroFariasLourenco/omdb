import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMovie } from "./../../redux/actions";

class Movie extends Component {
    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id);
        console.log(this.props.movie);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <img src={this.props.movie.Poster}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading : state.movies.loading,
    movie   : state.movies.movie
})

export default connect(mapStateToProps, { fetchMovie })(Movie);
