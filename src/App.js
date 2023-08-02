import React, { useState, useEffect } from 'react';
import logo from './logo2.png';
import latestvideos from './latestvideos.png';
import './App.scss'
import YouTubeEmbed from './YouTubeEmbed';
import propTypes from 'prop-types'

export const App = () => {
    const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'
    const [videos, setVideos] = useState([]);
    const [currentChannelId, setCurrentChannelId] = useState('UCBHD6Yg8R1yS9akfGm4mecQ');
    const [currentVideo, setCurrentVideo] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetch(`${baseUrl}${currentChannelId}`)
            .then(response => response.json());

            setVideos(data.items);
            console.log(data.items);            
            setCurrentVideo(data.items[0].link.slice(-11));
        })();
    }, [currentChannelId]);

    

 //   console.log(currentVideo);

    
    return (
        <div className="app-container">
            <div>
                <img src={logo} alt="Pokemans4Lyf" height="110" width="450"></img>
            </div>
            <div>
                <img src={latestvideos} alt="Latest Videos!" height="100" width="300"></img>
                </div>
            <div class="iframe_container">
                <iframe
                  class="iframe"
                  src="https://www.tiktok.com/embed/7262609693506391314"
                  allowfullscreen
                  scrolling="no"
                  allow="encrypted-media;"
                ></iframe>
            </div>
            <div class='tiktok-feed' data-embed-id='175036'>
            <iframe width="900" height="1600" src="https://rss.app/embed/v1/wall/TxY9KdJERbbBPpup" frameborder="0"></iframe>
                    </div>    
        </div>
)};

/* youtube video code

<div className='video-responsive'>
                <iframe
                    width="100%"
                    height="480"
                    src={`https://www.youtube.com/embed/${currentVideo}`}
                    frameBorder="0"
                    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            </div>
            <div className="videos">
                {videos.map(video => (
                    <div key ={video.guid} className="videos__item">
                        <div className="video__image">
                            <a target="_blank" href={video.link}>
                                <img src={`https://i4.ytimg.com/vi/${video.guid.split(':')[2]}/mqdefault.jpg`} //onClick={setCurrentVideo(video.link.slice(-11))}
                                />
                            </a>
                        </div>
                        <div className="video__footer">
                            <p>{video.title}</p>
                        </div>
                    </div>
                ))
                }
            </div>

*/