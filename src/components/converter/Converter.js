import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';


import Header from '../header/Header';
import YoutubeConvertParams from '../youtube-convert-params/YoutubeConvertParams';
import YoutubeConversionResult from '../youtube-conversion-result/YoutubeConversionResult';
import { extractVideoId } from '../../actions';
import './Converter.css';

const Converter = (props) => {
    let footer = props.children && (
        <blockquote className="converter-footer">
            {props.children}
        </blockquote>
    );
    return (
        <div className="converter">
            <Header text={props.header} className="converter-header" />
            <div className="converter-content container">
                <YoutubeConvertParams />
                <div className="app-row text-center">
                    <Button bsStyle="primary" className="btn-raised convert-btn" disabled={!props.isUrlValid} onClick={() => props.onConvert(props.url)}>Convert To Markdown</Button>
                </div>
                <YoutubeConversionResult videoId={props.videoId} altText={props.altText} videoTitle={props.videoTitle}/>
                <div>
                    {footer}
                </div>
            </div>
        </div>
        );
};

Converter.propTypes = {
    videoId: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    videoTitle: PropTypes.string.isRequired,
    isUrlValid: PropTypes.bool.isRequired,
    onConvert: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
    return {
        url: state.params.url,
        altText: state.params.altText,
        videoTitle: state.params.videoTitle,
        videoId: state.result.videoId,
        isUrlValid: state.params.isValid
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onConvert: (url) => dispatch(extractVideoId(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);