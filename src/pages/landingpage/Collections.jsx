import { connect } from "react-redux";
import FetchFunc from "../../redux/productAction";
import { useEffect } from "react";

const Collections = ({ products, fetchProduct }) => {
  useEffect(() => {
    fetchProduct();
    console.log(products);
    if (products === undefined) {
      console.log("hello");
    }
  }, []);

  return (
    <div>
      <h1> collletion</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: () => dispatch(FetchFunc()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
