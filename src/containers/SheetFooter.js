import { connect } from 'react-redux';
import SheetFooter from '../components/SheetFooter';

const mapStateToProps = ({ companyName, textPosition }) => ({
  companyName,
  textPosition,
});

export default connect(mapStateToProps, null)(SheetFooter);
