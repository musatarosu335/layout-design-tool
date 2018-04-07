import { connect } from 'react-redux';
import ImageArea from '../components/ImageArea';

const mapStateToProps = ({ selectedImage }) => ({
  selectedImage,
});

export default connect(mapStateToProps, null)(ImageArea);
