import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <div className="card-img">
                <img src={ url} alt={ title} />
            </div>
            <div className="card-title">{ title }</div>
        </div>
    )
}
