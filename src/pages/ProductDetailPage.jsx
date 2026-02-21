import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const baseURL = "https://fakestoreapi.com/products/";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, getProduct] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchProductDetails = () => {
    setLoading(true);

    axios
      .get(baseURL + `${id}`)
      .then((res) => {
        getProduct(res.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(fetchProductDetails, []);

  if (loading)
    return (
      <div className="alert alert-warning container loading-box">
        <div className="spinner-border text-warning" role="status"></div>
        <h1 className="loading-text text-center">Loading...</h1>
      </div>
    );

  return (
    <div className="container py-5">
      {error ? (
        <h1 className="text-center container alert alert-danger">
          {error.response?.data?.error ?? error.message}
        </h1>
      ) : (
        <>
          <h1 className="text-center">Product Detail:</h1>
          <h2 className="text-center">{product.title}</h2>
          <div className="card" id="productDetailBox">
            <div className="detailImage">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
            </div>
            <div className="card-body card-detail-body">
              <h5 className="card-title text-center my-3">{product.title}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <small className="text-body-secondary d-block my-1">
                    Price:{""}
                  </small>
                  € {product.price}
                </li>
                <li className="list-group-item">
                  <small className="text-body-secondary d-block my-1">
                    Category:{""}
                  </small>
                  {product.category}
                </li>
                <li className="list-group-item">
                  <small className="text-body-secondary d-block my-1">
                    Description:{""}
                  </small>
                  <div className="descriptionText">{product.description}</div>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
