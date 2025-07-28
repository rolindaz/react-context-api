import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import AboutUsPage from "./pages/AboutUsPage"
import DefaultLayout from "./layouts/DefaultLayout"
import SingleProductPage from "./pages/SingleProductPage"
import { ProductsProvider } from "./contexts/ProductsContext"

function App() {

  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={HomePage} />
              <Route path="/products" Component={ProductsPage} />
              <Route path="/about-us" Component={AboutUsPage} />
              <Route path="/products/:id" Component={SingleProductPage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </>
  )
}

export default App