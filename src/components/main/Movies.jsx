import React, { Component } from 'react'
import { connect } from 'react-redux';
import { EmptySearch } from "./EmptySearch.jsx";
import MovieCard from "./MovieCard";

export class Movies extends Component {
    render() {  
        const { movies } = this.props;
        let content;
        
        movies !== undefined ? content = movies.map((movie, index) => {
            if (movie.Poster == "N/A") {
                return;
            }
            return (
                <MovieCard
                    key={index}
                    movie={movie}
                />
            )
        }) : content = <EmptySearch text={this.props.text}/>;
        console.log("CONTENT", content);
        return (
            <div className="wrapper__results__movie">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    text  : state.movies.text
})

export default connect(mapStateToProps)(Movies)
