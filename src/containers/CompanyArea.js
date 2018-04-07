import { connect } from 'react-redux';
import CompanyArea from '../components/CompanyArea';
import { inputCompanyName } from '../actions';

const mapStateToProps = ({ companyName }) => ({
  companyName,
});

const mapDispatchToProps = dispatch => ({
  inputCompanyName(companyName) {
    dispatch(inputCompanyName(companyName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyArea);
