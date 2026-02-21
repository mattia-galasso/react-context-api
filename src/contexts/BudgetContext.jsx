import { createContext, useState, useContext } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  /*   const [budgetMode, setBudgetMode] = useState(false); */
  const contextValue = {
    test: "Provider Test",
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
