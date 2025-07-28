import referenceImgs from "../data/referenceImgs"

export default function HomePage() {
    return (
        <>
            <main>
                <section className="carousel pb-5">
                    <div className="wrapper overflow-hidden">
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {
                                    referenceImgs.map((img) => {
                                        return (
                                            <div key={img.id} className="carousel-item active">
                                                <img src={img.src} className="d-block w-100" alt={img.alt} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="blog pt-5">
                    <div className="container">
                        <h2 className="text-center">
                            Il nostro Blog
                        </h2>
                        <h3 className="text-center">
                            Conosci i nostri prodotti per tutte le stagioni!
                        </h3>
                        <div className="row g-3 my-5">
                            {
                                referenceImgs.map((img) => {
                                    return (
                                        <div key={img.id} className="col">
                                            <div className="card h-100">
                                                <img src={img.src} alt={img.alt} className="card-img-top" />
                                                <div className="card-body">
                                                    <h4>
                                                        {img.alt}
                                                    </h4>
                                                    <span>
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At asperiores quisquam qui, tempore laboriosam reiciendis ipsum doloribus aperiam sequi recusandae.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}