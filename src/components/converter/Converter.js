import React, {Component} from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';


import Header from '../header/Header'
import YoutubeConvertParams from '../youtube-convert-params/YoutubeConvertParams'
import YoutubeConversionResult from '../youtube-conversion-result/YoutubeConversionResult'
import { getVideoId } from '../../utils/YoutubeUrl'
import { extractVideoId } from '../../actions'
import './Converter.css'

class Converter extends Component {
    constructor(props) {
        super(props);

        this.convert = this.convert.bind(this);

    }

    convert() {
        let videoId = getVideoId(this.state.url);
        let altText = this.state.altText || '';
        let videoTitle = this.state.videoTitle || '';
        this.setState({
            videoId: videoId,
            urlMarkdown: `[![${altText}](http://img.youtube.com/vi/${videoId}/0.jpg)](http://www.youtube.com/watch?v=${videoId} "${videoTitle}")`
        });
    }
    render() {
        let footer = this.props.children && (
            <blockquote className="converter-footer">
                {this.props.children}
            </blockquote>
        );
        return (
            <div className="converter">
                <Header text={this.props.header} className="converter-header" />

                <div className="converter-content container">
                    <YoutubeConvertParams />
                    <div className="app-row text-center">
                        <Button bsStyle="primary" className="btn-raised convert-btn" disabled={!this.props.isUrlValid} onClick={this.convert}>Convert To Markdown</Button>
                    </div>
                    <YoutubeConversionResult videoId={this.props.videoId} altText={this.props.altText} videoTitle={this.props.videoTitle}/>
                    <div>
                        {footer}
                    </div>
                </div>
            </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        altText: state.params.altText,
        videoTitle: state.params.videoTitle,
        videoId: state.result.videoId,
        isUrlValid: state.params.isValid
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        convert: () => dispatch(extractVideoId())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);