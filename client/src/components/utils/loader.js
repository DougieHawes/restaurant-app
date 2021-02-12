import loader from "../../media/loader.png";

const Loader = () => (
  <div className="loader">
    <img className="loading-img" src={loader} alt="" />
    <p className="loading-text">LOADING...</p>
  </div>
);

export default Loader;
