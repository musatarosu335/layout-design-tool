import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { selectImage } from '../actions';

const mapStateToProps = ({ images }) => ({
  images,
});

const mapDispatchToProps = dispatch => ({
  selectImage(url) {
    dispatch(selectImage(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
