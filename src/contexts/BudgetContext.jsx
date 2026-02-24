import axios from "axios";
import { createContext, useState, useContext } from "react";
axios;

const apiURL = "https://fakestoreapi.com/products";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  //* BUDGET MODE
  const [products, setProducts] = useState([]);
  const [budgetMode, setBudgetMode] = useState(false);

  const filteredProducts = budgetMode
    ? products.filter((product) => product.price <= 30)
    : [...products];

  console.log(filteredProducts);

  //* FETCH PRODUCTS
  const fetchProducts = () => {
    axios.get(apiURL).then((res) => {
      const productsData = res.data.map((prod) => {
        const title =
          prod.title.length > 70
            ? prod.title.substring(0, 66) + "..."
            : prod.title;

        return {
          ...prod,
          title: title,
        };
      });
      setProducts(productsData);
      console.log("ORIGINAL ARRAY:", productsData);
    });
  };

  //? CONTEXT VALUE
  const contextValue = {
    setBudgetMode,
    budgetMode,
    fetchProducts,
    products: filteredProducts,
  };

  return (
    <BudgetContext.Provider value={contextValue}>
      {children}
    </BudgetContext.Provider>
  );
}

function useBudgetMode() {
  return useContext(BudgetContext);
}

export { BudgetProvider, useBudgetMode };
