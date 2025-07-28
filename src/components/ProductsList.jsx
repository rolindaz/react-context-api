import { useProductsContext } from "../contexts/ProductsContext"
import { Link } from "react-router-dom"

export default function ProductsList() {

    const { productData } = useProductsContext()
    console.log(productData);


    return (
        <div className="container py-3">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                {
                    productData.map((product) => {
                        return (
                            <div key={product.id} className="col">
                                <div className="product-card h-100 d-flex flex-column p-4">
                                    <Link className="align-self-center" to={`/products/${product.id}`}>
                                        <button className="btn btn-primary">
                                            View the product
                                        </button>
                                    </Link>
                                    <div className="img-wrap mt-2">
                                        <img src={product.image} className="card-img-top p-4" alt={product.title} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title py-2">
                                            {product.title}
                                        </h5>
                                        <p className="card-text">
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="product-info pt-2 d-flex flex-column row-gap-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="h5 mb-0">
                                                $ {product.price}
                                            </span>
                                            <div>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <small className="text-muted">
                                                    {product.rating.rate}
                                                </small>
                                                <small className="text-muted">
                                                    ({product.rating.count})
                                                </small>
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between bg-light">
                                            <button className="btn btn-primary btn-sm">
                                                Add to Cart
                                            </button>
                                            <button className="btn btn-outline-secondary btn-sm">
                                                <i className="bi bi-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}