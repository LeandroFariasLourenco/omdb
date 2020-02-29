import React , { Fragment } from 'react'
import loadingGif from "./../../images/spinner.gif";

function Loading() {
    return (
        <Fragment>
            <img 
                src={loadingGif} 
                alt=""                
                />
        </Fragment>
    )
}

export { Loading };
