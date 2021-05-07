// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import ManualEntryView from './ManualEntryView';

export default compose(
  connect(
    state => ({}),
    dispatch => ({}),
  ),
)(ManualEntryView);
