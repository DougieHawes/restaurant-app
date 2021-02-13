import loader from "../../media/loader.png";

const Loader = () => (
  <div className="loader">
    <p className="loading-text">LOADING...</p>
    <img className="loading-img" src={loader} alt="" />
  </div>
);

export default Loader;
