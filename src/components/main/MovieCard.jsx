import React, { Component } from 'react'

export class MovieCard extends Component {
    lazyLoad () {
        function loadElement (elementToLazy) {
            const src = elementToLazy.getAttribute("data-src");
            elementToLazy.setAttribute("src",src);
            console.log(src);
            setTimeout(() => {
                elementToLazy.setAttribute("data-src",'');
            }, 1000)
        }
        const lazyElements = document.querySelectorAll("[data-src]");
        
        const newObserver = new IntersectionObserver((entries , observer) => {
            entries.forEach((entry) => {
                if(!entry.isIntersecting){
                    return;
                }
                const element = entry.target;
                observer.unobserve(element);
                loadElement(element);
                element.addEventListener("load" , () => {
                    element.classList.remove("js--lazyloading");
                })
                
            })
        } , {root : null , threshold : 0.5})
        
        Array.from(lazyElements).forEach((lazyElement) => {
            lazyElement.classList.add("js--lazyloading");
            newObserver.observe(lazyElement);
        })
    }

    updateResults () {
        const loadedElements = document.querySelectorAll(".wrapper__results__movie__container [src]")
        Array.from(loadedElements).forEach((loadedElement) => {
            loadedElement.classList.add("js--lazyloading");
            loadedElement.setAttribute("src",'');
        })
    }

    componentDidMount(){
        this.lazyLoad();
    }

    componentDidUpdate(){
        this.updateResults();
        this.lazyLoad();
    }

    render() {
        const { movie } = this.props;
        console.log(movie);
        return (
            <div className="wrapper__results__movie__container">
                <img data-src={movie.Poster} alt="" />
            </div>
        )
    }
}

export default MovieCard