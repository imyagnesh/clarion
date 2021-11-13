import { connect } from 'react-redux';
import { ADD_PRODUCT, REQUEST } from '../../constants/actionTypes';
import AddProduct from './AddProduct';

const mapDispatchToProps = dispatch => ({
  addProduct: (payload, actions) =>
    dispatch({ type: `${ADD_PRODUCT}_${REQUEST}`, payload, actions }),
});

export default connect(null, mapDispatchToProps)(AddProduct);
