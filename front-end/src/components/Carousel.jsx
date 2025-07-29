import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default function Carousel() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/marvel/hero-banners", {
            credentials: "include"
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setHeroes(data)
            })
            .catch((err) => console.error("Errore fetch:", err));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {heroes.map(hero => (
                    <div key={hero.id} className="carousel-slide">
                        <img src={`http://localhost:3000${hero.imageUrl}`} alt={hero.alt} className="carousel-img" />
                        <div className="overlay">
                            <h2>{hero.title}</h2>
                            <button>Scopri prodotti</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
