import React, {Component} from 'react'
import Header from '../header/Header'
import YoutubeConvertParams from '../youtube-convert-params/YoutubeConvertParams'
import { getVideoId } from '../../utils/YoutubeUrl'
import { Button, Panel } from 'react-bootstrap';
import './Converter.css'

class Converter extends Component {
    constructor(props) {
        super(props);
        this.youtubeUrlChanged = this.youtubeUrlChanged.bind(this);
        this.youtubeUrlIsValidChanged = this.youtubeUrlIsValidChanged.bind(this);
        this.videoTitleChaged = this.videoTitleChaged.bind(this);
        this.altTextChanged = this.altTextChanged.bind(this);
        this.convert = this.convert.bind(this);
        this.state = {
        url: '',
        isUrlValid: true,
        urlMarkdown: null,
        videoId: null,
        altText: '',
        videoTitle: ''
        }
    }
    youtubeUrlChanged(url) {
        this.setState({
        url: url
        })
    }
    youtubeUrlIsValidChanged(isValid) {
        this.setState({
        isUrlValid: isValid
        });
    }
    videoTitleChaged(title) {
        this.setState({
        videoTitle: title
        });
    }
    altTextChanged(altText) {
        this.setState({
        altText: altText
        });
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
                    <YoutubeConvertParams
                        url={this.state.url}
                        isUrlValid={this.state.isUrlValid}
                        onYoutubeUrlChanged={this.youtubeUrlChanged}
                        altText={this.state.altText}
                        title={this.state.videoTitle}
                        onTitleChanged={this.videoTitleChaged}
                        onAltTextChanged={this.altTextChanged} />
                    <div className="app-row text-center">
                        <Button bsStyle="primary" className="btn-raised convert-btn" disabled={!this.state.isUrlValid} onClick={this.convert}>Convert To Markdown</Button>
                    </div>
                    <div className="app-row">
                        <Panel header="Markdown">
                        {this.state.urlMarkdown}
                        </Panel>
                    </div>
                    <div className="app-row">
                        <Panel header="Preview">
                            {
                            this.state.videoId ? (
                            <div className="text-center">
                                <a href={`http://www.youtube.com/watch?v=${this.state.videoId}`} title={this.state.videoTitle}>
                                <img className="result-preview" src={`http://img.youtube.com/vi/${this.state.videoId}/0.jpg`} alt={this.state.altText}/>
                                </a>
                            </div>
                            ) : null
                            }
                        </Panel>
                    </div>
                    <div>
                        {footer}
                    </div>
                </div>
            </div>
            );
    }
}

export default Converter;