
import { connect } from 'react-redux';
import { createPin, fetchPins } from '../../actions/pin_actions';
import { withRouter } from 'react-router-dom';
import CreatePin from './pin_create';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    pins: Object.values(state.entities.pins),
    pin: {
        title: '',
        description: '',
        author_id: this.props.currentUser.id,
        photoUrl: null,
    }
});

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    createPin: (pin) => dispatch(createPin(pin)),
});

export default withRouter(connect(mSTP,mDTP)(CreatePin));


