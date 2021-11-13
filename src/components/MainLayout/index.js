import { connect } from 'react-redux';
import MainLayout from './MainLayout';

const mapStateToProps = state => ({
  totalItems: state?.cart?.totalItems,
});

export default connect(mapStateToProps)(MainLayout);
