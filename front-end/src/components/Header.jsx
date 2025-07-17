export default function Header() {
    return (
        <header className="container-fluid bg-dark text-white py-3">
            <div className="d-flex justify-content-between align-items-center">
                {/* Logo */}
                <div className="fw-bold fs-4 text-danger">
                    <a href="/" className="text-decoration-none text-danger">MARVEL SHOP</a>
                </div>

                {/* Barra di ricerca */}
                <form className="d-flex mx-4" style={{ flex: 1, maxWidth: "400px" }}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Cerca prodotti Marvel..."
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-danger" type="submit">Cerca</button>
                </form>

                {/* Menu di navigazione */}
                <nav className="d-none d-md-flex gap-3">
                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorie
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Film</a></li>
                            <li><a className="dropdown-item" href="#">Action Figure</a></li>
                            <li><a className="dropdown-item" href="#">Abbigliamento</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Collezioni
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Infinity Saga</a></li>
                            <li><a className="dropdown-item" href="#">Multiverse Saga</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Personaggi
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Iron Man</a></li>
                            <li><a className="dropdown-item" href="#">Spider-Man</a></li>
                            <li><a className="dropdown-item" href="#">Thor</a></li>
                        </ul>
                    </div>
                </nav>

                {/* Icone e azioni rapide */}
                <div className="d-flex gap-3">
                    <a href="#" className="text-white"><i className="bi bi-heart"></i></a>
                    <a href="#" className="text-white"><i className="bi bi-cart"></i></a>
                    <a href="#" className="text-white"><i className="bi bi-person"></i></a>
                </div>
            </div>
        </header>
    );
}