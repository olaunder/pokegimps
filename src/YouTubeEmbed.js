import React from 'react'

import propTypes from 'prop-types'

const YouTubeEmbed = ({currentVideo}) => (
    <div className='video-responsive'>
        <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${currentVideo}`}
        frameBorder="0"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        />

    </div>
);

YouTubeEmbed.propTypes = {
    currentVideo:propTypes.string.isRequired
}

export default YouTubeEmbed