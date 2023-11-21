import React from 'react'

function Buttons ({ handleIterate}) {
    return (
        <div>
            <button value={-5} onClick={handleIterate}>Way Back</button>
            <button value={-1} onClick={handleIterate}>Back</button>
            <button value={1} onClick={handleIterate}>Next</button>
            <button value={5} onClick={handleIterate}>Big Next</button>
        </div>
    )

}

export default Buttons