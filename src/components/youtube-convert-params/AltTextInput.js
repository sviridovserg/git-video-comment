import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux'
import { changeAltText } from './actions'

const mapStateToProps = (state) => {
    return {
        value: state.params.altText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (e) => {
            dispatch(changeAltText(e.target.value))
        }
    }
};

const AltTextInput = connect(mapStateToProps, mapDispatchToProps)(FormControl);

export default AltTextInput;