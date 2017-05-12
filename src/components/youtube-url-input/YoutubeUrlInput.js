import React, { Component } from 'react';
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import './YoutubeUrlInput.css'
import { isYoutubeUrlValid } from '../../utils/YoutubeUrl'

class YoutubeUrlInput extends Component {
    constructor(props) {
        super(props);
        this.urlChanged = this.urlChanged.bind(this);
        this.state = {
            validationState: this.getValidationStateValue(props.isValid)
        }
    }
    getValidationStateValue(isValid) {
        return isValid ? null : 'error';
    }
    urlChanged(e) {
        let url = e.target.value;
        let isValid = !url || isYoutubeUrlValid(url);


        if (this.props.isValid !== isValid) {
            this.props.onIsValidChanged && this.props.onIsValidChanged(isValid);
        }
        this.setState({
            validationState: this.getValidationStateValue(isValid)
        });
        this.props.onUrlChanged && this.props.onUrlChanged(url);
    }
    render() {
        return (
            <FormGroup className="url-input" validationState={this.state.validationState}>
                <FormControl type="text" placeholder={this.props.placeholder} value={this.props.url} onChange={this.urlChanged} />
                <HelpBlock>Youtube url is invalid</HelpBlock>
            </FormGroup>
        );
    }
}

export default YoutubeUrlInput;