import React from 'react'
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const YoutubeConversionResult = (props) => {
    let markdown = props.videoId && `[![${props.altText}](http://img.youtube.com/vi/${props.videoId}/0.jpg)](http://www.youtube.com/watch?v=${props.videoId} "${props.videoTitle}")`;
    return (
        <div>
            <div className="app-row">
                <Panel header="Markdown">{markdown}</Panel>
            </div>
            <div className="app-row">
                <Panel header="Preview">
                    {
                    props.videoId ? (
                    <div className="text-center">
                        <a href={`http://www.youtube.com/watch?v=${props.videoId}`} title={props.videoTitle}>
                        <img className="result-preview" src={`http://img.youtube.com/vi/${props.videoId}/0.jpg`} alt={props.altText}/>
                        </a>
                    </div>
                    ) : null
                    }
                </Panel>
            </div>
        </div>
    );
};

YoutubeConversionResult.propTypes = {
    videoId: PropTypes.string.isRequred,
    altText: PropTypes.string.isRequred,
    videoTitle: PropTypes.string.isRequred
};

export default YoutubeConversionResult;