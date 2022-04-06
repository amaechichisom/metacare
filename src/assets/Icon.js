import React from 'react'

function Icon(props) {
  return (
    <svg
            width={props.width}
            height={props.height}
            className={props.className}
            viewBox={props.viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={props.path}
                fill={props.color}/>
        </svg>
  )
}

export default Icon