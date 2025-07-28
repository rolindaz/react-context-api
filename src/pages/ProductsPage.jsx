import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function ProductsPage() {

    const url = 'https://fakestoreapi.com/products'
    const [productData, setProductData] = useState([{
        id: null,
        title: '',
        price: null,
        description: '',
        category: '',
        image: '',
        rating: {
            rate: null,
            count: null
        }
    }])

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
        <>
            <main>
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">
                            Shop
                        </h1>
                        <p className="col-md-8 fs-4">
                            Esplora la nostra collezione primavera estate
                        </p>
                    </div>
                </div>

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
            </main>
        </>
    )
}