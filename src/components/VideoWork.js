import React from 'react';
import { FaYoutube, FaFacebook, FaInstagram, FaPlay } from 'react-icons/fa';
import './VideoWork.css';

const platformIcon = {
    youtube: FaYoutube,
    facebook: FaFacebook,
    instagram: FaInstagram,
};

const videos = [
    {
        platform: 'facebook',
        url: 'https://www.facebook.com/reel/2496621867240950',
        thumbnail: `${process.env.PUBLIC_URL}/img/video-kingdomcome.jpg`,
        title: 'Kingdom Come: High School Play',
        tools: ['Adobe After Effects', 'Adobe Premiere Pro'],
    },
    {
        platform: 'facebook',
        url: 'https://www.facebook.com/reel/701254870695343',
        thumbnail: `${process.env.PUBLIC_URL}/img/video-onionbunch.jpg`,
        title: 'The Onion Bunch: Pungko Pungko in a Box',
        tools: ['Vegas Pro'],
    },
    {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DZBcjiaTg1Z/',
        thumbnail: `${process.env.PUBLIC_URL}/img/video-japanreel.jpg`,
        title: 'Lake Kawaguchiko: Japan Trip Reel',
        tools: ['CapCut'],
    },
    {
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=mlUlD5jGjFs',
        thumbnail: `${process.env.PUBLIC_URL}/img/video-ndis.jpg`,
        title: '5 Things You Must Do Before Starting an NDIS Business in 2026',
        tools: ['Descript'],
    },
];

const VideoWork = () => {
    return (
        <section id="video-work">
            <div className="video-work-content">
                <h1>Video Editing</h1>
                <p className="video-intro">A couple of pieces that show my editing range.</p>

                <div className="video-grid">
                    {videos.map((video) => {
                        const Icon = platformIcon[video.platform];
                        return (
                            <div className="video-card" key={video.title}>
                                <a
                                    className="video-thumb-frame"
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Watch "${video.title}"`}
                                >
                                    <img src={video.thumbnail} alt={video.title} />
                                    <span className="video-play-button">
                                        <FaPlay />
                                    </span>
                                    <span className="video-platform-badge">
                                        <Icon />
                                    </span>
                                </a>
                                <p className="video-caption">{video.title}</p>
                                {video.tools && (
                                    <div className="tags">
                                        {video.tools.map((tool) => (
                                            <span className="tag" key={tool}>{tool}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default VideoWork;
