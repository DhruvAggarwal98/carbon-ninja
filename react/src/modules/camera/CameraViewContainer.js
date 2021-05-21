// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import CameraView from './CameraView';

export default compose(
  connect(
    state => ({}),
    dispatch => ({}),
  ),
)(CameraView);
