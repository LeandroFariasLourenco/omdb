import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMovie } from "./../../redux/actions";

class Movie extends Component {
    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id);
    }

    render() {
        console.log(this.props);
        return (
            <section className="wrapper__movie">
                <img src={this.props.movie.Poster}/>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    loading : state.movies.loading,
    movie   : state.movies.movie
})

export default connect(mapStateToProps, { fetchMovie })(Movie);
