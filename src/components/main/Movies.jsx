import React, { Component } from 'react'
import { connect }          from 'react-redux';
import {EmptySearch}             from "./EmptySearch.jsx";
import MovieCard            from "./MovieCard";

export class Movies extends Component {
    render() {
        const { movies } = this.props;
        let content = '';
        try {
            content = movies.map((movie, index) =>
                <MovieCard
                    key={index}
                    movie={movie}
                />
            );
        } catch (e) {
            content = <EmptySearch />;
        }
        console.log("CONTENT", content);
        return (
            <div className="wrapper__results__movie">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(Movies)
