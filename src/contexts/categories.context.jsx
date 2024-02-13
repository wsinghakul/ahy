import { createContext, useState, useEffect } from "react";

import SHOP_DATA from "../routes/shop/shop-data.js";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});
  useEffect(() => {
    const getCartegoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap)
      setcategoriesMap(categoryMap)
    };
    getCartegoriesMap();
  },[]);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {" "}
      {children}{" "}
    </CategoriesContext.Provider>
  );
};
