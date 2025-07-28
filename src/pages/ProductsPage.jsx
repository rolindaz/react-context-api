import ProductsList from "../components/ProductsList"

export default function ProductsPage() {

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
                <ProductsList />

            </main>
        </>
    )
}