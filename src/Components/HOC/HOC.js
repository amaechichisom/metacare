import React from 'react'
import './HOC.css'

function HOC(props) {
    return (
        <div className="hoc_padding py-2 pb-32">
            {props.children}
        </div>
    )
}

export default HOC
