import DummyScreen from '../component/dummy';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import * as actionCreators from '../redux/actions/creators';
import _get from 'lodash/get';

function mapStateToProps(state) {
    return { dummyData: _get(state, 'dummyReducer.dummyData') }
}
  
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(DummyScreen);