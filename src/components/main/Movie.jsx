import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Loading } from "./Loading";
import Flip from "react-reveal";
import {
    fetchMovie,
    setLoading
} from "./../../redux/actions";

class Movie extends Component {
    componentDidMount() {
        this.props.setLoading();
        this.props.fetchMovie(this.props.match.params.id);
    }

    render() {
        const { movie } = this.props
        console.log(this.props);
        let movieInfo = (
            <Flip bottom>
                <section className="wrapper__movie" >
                    <div className="wrapper__movie__poster">
                        <img src={this.props.movie.Poster} />
                        <Link className="btn" to={'/'}>
                            Go back
                    </Link>
                    </div>
                    <div className="wrapper__movie__description">
                        <div className="title">
                            <span>Title:</span>
                            <span>Release:</span>
                            <span>Runtime:</span>
                            <span>Genre:</span>
                            <span>Director:</span>
                            <span>Production:</span>
                            <span>Box office:</span>
                            <span>Awards:</span>
                        </div>
                        <div className="informations">
                            <span>{movie.Title}</span>
                            <span>{movie.Released}</span>
                            <span>{movie.Runtime}</span>
                            <span>{movie.Genre}</span>
                            <span>{movie.Director}</span>
                            <span>{movie.Production}</span>
                            <span>{movie.BoxOffice}<small> *domestic</small></span>
                            <span>{movie.Awards}</span>
                        </div>
                        <div className="others">
                            <div className="others__content">
                                <div className="others__content__informations">
                                    <span>Writer</span>
                                    <p>{movie.Writer}</p>
                                </div>
                                <div className="others__content__informations">
                                    <span>Actors</span>
                                    <p>{movie.Actors}</p>
                                </div>
                                <div className="others__content__informations">
                                    <span>Plot</span>
                                    <p>{movie.Plot}</p>
                                </div>
                            </div>
                            <div className="others__rating">
                                <img src="https://cdn.imgbin.com/20/22/18/imgbin-metacritic-video-game-review-aggregator-app-pheMfrC05GvUkaCksLSmNt1X3.jpg" />
                            </div>
                        </div>
                    </div>
                </section>
            </Flip>
        );
        let content = this.props.loading ? <Loading /> : movieInfo
        return (
            <Fragment>
                {content}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
