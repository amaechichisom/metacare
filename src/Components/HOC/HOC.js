import React from 'react'

function HOC(props) {
    return (
        <div className="px-2 md:px-4 xl:px-8 py-2 pb-32">
            {props.children}
        </div>
    )
}

export default HOC
