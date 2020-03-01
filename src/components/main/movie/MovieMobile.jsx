import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Loading } from "./../Loading";
import Fade from "react-reveal/Fade";
import {
    fetchMovie,
    setLoading
} from "./../../../redux/actions";

export class MovieMobile extends Component {
    componentDidMount() {
        this.props.setLoading();
        this.props.fetchMovie(this.props.match.params.id);
    }

    render() {
        const { movie } = this.props;
        console.log("THE BOI", movie);
        let movieInfo = (
            <Fade>
                <section className="wrapper__movie">
                    <div className="wrapper__movie__poster">
                        <img src={movie.Poster} alt="" />
                    </div>
                    <div className="wrapper__movie__informations">
                    <h2>General</h2>
                        <Fade bottom>
                            <div className="content">
                                <span>Title</span>
                                <p>{movie.Title}</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="content">
                                <span>Release</span>
                                <p>{movie.Released}</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="content">
                                <span>Runtime</span>
                                <p>{movie.Runtime}</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="content">
                                <span>Genre</span>
                                <p>{movie.Genre}</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="content">
                                <span>Director</span>
                                <p>{movie.Director}</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="content">
                                <span>Production</span>
                                <p>{movie.Production}</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="content">
                                <span>Box Office</span>
                                <p>{movie.BoxOffice}</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="content">
                                <span>Awards</span>
                                <p>{movie.Awards}</p>
                            </div>
                        </Fade>
                    </div>
                    <div className="wrapper__movie__informations">
                        <h2>More...</h2>
                        <Fade bottom>
                            <div className="content">
                                <span>Writer</span>
                                <p>{movie.Writer}</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="content">
                                <span>Actors</span>
                                <p>{movie.Actors}</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="content">
                                <span>Plot</span>
                                <p>{movie.Plot}</p>
                            </div>
                        </Fade>
                    </div>
                    <Link className="redirect" to={"/"}>
                        Go back
                    </Link>
                </section>
            </Fade>
        )
        return (
            <Fragment>
                {this.props.loading ? <Loading /> : movieInfo}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps, { fetchMovie, setLoading })(MovieMobile)
