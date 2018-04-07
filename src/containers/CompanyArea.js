import { connect } from 'react-redux';
import CompanyArea from '../components/CompanyArea';
import { inputCompanyName, inputTextPosition } from '../actions';

const mapStateToProps = ({ companyName, textPosition }) => ({
  companyName,
  textPosition,
});

const mapDispatchToProps = dispatch => ({
  inputCompanyName(companyName) {
    dispatch(inputCompanyName(companyName));
  },
  inputTextPosition(textPosition) {
    dispatch(inputTextPosition(textPosition));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyArea);
