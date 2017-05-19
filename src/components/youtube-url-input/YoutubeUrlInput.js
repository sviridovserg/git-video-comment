import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import './YoutubeUrlInput.css'
import { isYoutubeUrlValid } from '../../utils/YoutubeUrl'

class YoutubeUrlInput extends Component {
    constructor(props) {
        super(props);
        this.urlChanged = this.urlChanged.bind(this);
    }
    getValidationStateValue(isValid) {
        return isValid ? null : 'error';
    }
    urlChanged(e) {
        let url = e.target.value;
        let isValid = !url || isYoutubeUrlValid(url);


        if (this.props.isValid !== isValid) {
            this.props.onIsValidChanged(isValid);
        }
        this.props.onUrlChanged(url);
    }
    render() {
        return (
            <FormGroup className="url-input" validationState={ this.getValidationStateValue(this.props.isValid) }>
                <FormControl type="text" placeholder={this.props.placeholder} value={this.props.url} onChange={this.urlChanged} />
                <HelpBlock>Youtube url is invalid</HelpBlock>
            </FormGroup>
        );
    }
}

YoutubeUrlInput.propTypes = {
    url: PropTypes.string.isRequired,
    isValid: PropTypes.bool.isRequired,
    onUrlChanged: PropTypes.func.isRequired,
    onIsValidChanged: PropTypes.func.isRequired
}


export default YoutubeUrlInput;