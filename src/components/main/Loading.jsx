import React from 'react'
import loadingGif from "./../../images/spinner.gif";

function Loading() {
    return (
        <div>
            <img 
                src={loadingGif} 
                alt=""                
                />
        </div>
    )
}

export { Loading };
