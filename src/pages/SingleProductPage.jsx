import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function SingleProductPage() {

    const { id } = useParams()
    const url = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState([])
    const navigation = useNavigate()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    })

    return (
        <div className="container mt-5">
            <button className="btn btn-primary" onClick={() => navigation(-1)}>
                Back
            </button>
            <div key={product.id} className="col">
                <div className="product-card h-100 d-flex flex-column p-4">
                    <div className="img-wrap">
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
                                {/* <small className="text-muted">
                                    {product.rating.count}
                                </small>
                                <small className="text-muted">
                                    ({product.rating.count})
                                </small> */}
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
        </div>
    )
}