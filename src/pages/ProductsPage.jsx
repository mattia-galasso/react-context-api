import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useBudgetMode } from "../contexts/BudgetContext";

export default function ProductsPage() {
  const { fetchProducts, products } = useBudgetMode();
  useEffect(fetchProducts, []);

  // console.log("FILTERED ARRAY:", products);

  return (
    <>
      <main>
        <div className=" py-4">
          <h1 className="text-center mb-4">Products</h1>
          <div className="productsList">
            {products.map((product, index) => (
              <div className="card my-4 productsCard" key={index}>
                <Link
                  to={"/products/" + product.id}
                  className="text-decoration-none link-body-emphasis"
                >
                  <div className="card-image">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body">
                    <small className="text-body-secondary d-block my-1">
                      {product.category}
                    </small>
                    <h5 className="card-title">{product.title}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <small className="text-body-secondary d-block my-1">
                        Price:{""}
                      </small>
                      € {product.price}
                    </li>
                  </ul>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
