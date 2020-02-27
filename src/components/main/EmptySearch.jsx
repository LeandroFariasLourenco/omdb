import React from 'react'
import emptyImg from './../../images/empty.png';

const EmptySearch = props => {
    return (
        <div className="wrapper__results__movie__empty">
            <img src={emptyImg} alt="" />
            <span>Sorry, there were no results found for</span> 
            <span>{props.text}</span>
        </div>
    )
}

export { EmptySearch }
