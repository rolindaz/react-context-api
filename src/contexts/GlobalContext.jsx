import { createContext, useContext, useState, useEffect } from "react";
const GlobalContext = createContext()

function GlobalProvider({ children }) {
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
        <GlobalContext.Provider value={{
            productData,
            setProductData
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }