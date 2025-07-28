import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './Home.css'

export default function Home() {

    const [banners, setBanners] = useState([]);
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/marvel/hero-banners", {
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => setBanners(data));
    }, []);

    const nextSlide = () => setCurrent((current + 1) % banners.length);
    const prevSlide = () => setCurrent((current - 1 + banners.length) % banners.length);

    return (
        <>
            <div className="carousel-container">
                {banners.map((banner, idx) => (
                    <div
                        key={banner.id}
                        className={`carousel-slide ${idx === current ? 'active' : ''}`}
                        onClick={() => handleBannerClick(banner.character_id)}
                    >
                        <img
                            src={`http://localhost:3000${banner.imageUrl}`}
                            alt={banner.alt}
                            className="carousel-image"
                        />
                        <div className="carousel-text">
                            <h1>{banner.title}</h1>
                            <p>{banner.subtitle}</p>
                        </div>
                    </div>
                ))}

                <button
                    className="carousel-arrow left"
                    onClick={prevSlide}
                    aria-label="Indietro"
                >
                    &#10094;
                </button>
                <button
                    className="carousel-arrow right"
                    onClick={nextSlide}
                    aria-label="Avanti"
                >
                    &#10095;
                </button>
            </div>

        </>
    )
}