import { connect } from 'react-redux';
import SheetFooter from '../components/SheetFooter';

const mapStateToProps = ({ companyName }) => ({
  companyName,
});

export default connect(mapStateToProps, null)(SheetFooter);
