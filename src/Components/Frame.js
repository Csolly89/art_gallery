import React from 'react'

function Frame ({ objectImg, title, artist }) {
    return (
        <div style={{'width':'100%'}}>
            <img src={objectImg} alt={title} />
            <p>{artist}</p>
        </div>
    )
}

export default Frame