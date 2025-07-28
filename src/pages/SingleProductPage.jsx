import ProductCard from "../components/ProductCard"
import { useNavigate } from "react-router-dom"

export default function SingleProductPage() {

    const navigation = useNavigate()

    return (
        <div className="container mt-5">
            <button className="btn btn-primary" onClick={() => navigation(-1)}>
                Back
            </button>
            <ProductCard />
        </div>
    )
}