import React, { Component } from 'react'

export class MovieCard extends Component {
    render() {
        const { movie } = this.props;
        console.log(movie);
        return (
            <div className="wrapper__results__movie__container">
                <img src={movie.Poster} alt="" />
            </div>
        )
    }
}

export default MovieCard
