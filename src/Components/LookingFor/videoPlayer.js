import React from 'react';
import video from '../../assets/video/monbold.mp4';
const VideoPlayer = () => {
    return (
        <div className="col-12 d-inline-flex justify-content-center"
        >
            <div className="col-12 d-inline-flex justify-content-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    className="col-12 d-inline-block"
                    style={{ width: '100%', height: 'auto' }}
                >
                    <source
                        src={video}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoPlayer;