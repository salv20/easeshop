import { connect } from "react-redux";
import FetchFunc from "../../redux/productAction";
import { useEffect } from "react";

const Collections = ({ products, fetchProduct }) => {
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <section>
      <div className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center w-[80%] mx-auto">
        <button className="sort-btn btn-sm">all</button>
        <button className="sort-btn btn-sm">men&#39;s clothing</button>
        <button className="sort-btn btn-sm">women&#39;s clothing</button>
        <button className="sort-btn btn-sm">jewerly</button>
        <button className="sort-btn btn-sm">electronics</button>
      </div>
      <h1> collletion</h1>
    </section>
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
