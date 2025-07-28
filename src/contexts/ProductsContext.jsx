import { createContext, useContext, useState, useEffect } from "react";
const ProductsContext = createContext()

function ProductsProvider({ children }) {
    const url = 'https://fakestoreapi.com/products'
    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProductData(data)
            })
    }, [])

    console.log(productData);

    return (
        <ProductsContext.Provider value={{
            productData,
            setProductData
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

function useProductsContext() {
    return useContext(ProductsContext)
}

export { ProductsProvider, useProductsContext }